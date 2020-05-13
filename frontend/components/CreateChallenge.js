import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Switch, Image, ImageBackground, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from "../constants/Colors"
import { Input, Text, Button } from 'galio-framework';
import DatePicker from 'react-native-datepicker'
import Tags from "./CustomTags";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
const baseMargin = 10;
const base_url = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080";


export default function CreateChallenge (props) {

  const [tagList, setTagList] = React.useState(["euvsvirus", "yourturn"]);  
  const [name, setName] = React.useState("Enter challenge name here");  
  const [description, setDescription] = React.useState();  
  const [isPublic, setIsPublic] = React.useState(false);  
  const [hasVoting, setHasVoting] = React.useState(false);  
  const [deadline, setDeadline] = React.useState(new Date().toISOString().slice(0,10));  
  const [costs, setCosts] = React.useState();  
  const [bet, setBet] = React.useState("Bet");  
  const [proof, setProof] = React.useState("Proof");
  const [imageChallenge, setImageChallenge] = React.useState(undefined);
  const [dialogState, setDialogState] = React.useState([]);

  const onTextInputChange = (event, changeMethod) => {
    changeMethod(event.nativeEvent.text);
  }

  const toggleSwitch = (state, changeMethod) => {
    changeMethod(!state)
    console.log(state)
  }

  // Send data of create project form page 1 to server
  const submitChallenge = () => {

    console.log(deadline)

    const convertedState = {
        name: name,
        owner: {
          name: "Manu",
          id: 1
        },
        description: description,
        private: !isPublic,
        voting: hasVoting,
        tags: tagList,
        deadline: new Date(deadline),
        proof: proof,
        picture_id: 1,
        bet: bet,
    };

    console.log("Following object will be sent to server:");
    console.log(convertedState);
    console.log("\n");

    // Send HTTP POST request with project name and material number to server
    // return fetch(`${base_url}/challenges`, {
    //     method: 'POST',
    //     headers: new Headers({
    //         'Content-Type': 'application/json'
    //       }), 
    //     body: JSON.stringify(convertedState)
    // })
    //     .then(res => res.json())
    //     .then(
    //         result => {
    //             console.log("Result received from server: ");
    //             console.log(result);
    //             console.log("\n");
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     )
  };
  
  const pickImage = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImageChallenge(result.uri);
            setDialogState({ visible: false });
        }

        console.log(result);
    } catch (E) {
        console.log(E);
    }
}

const takeImage = async () => {
    try {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImageChallenge(result.uri);
            setDialogState({ visible: false });
        }

        console.log(result);
    } catch (E) {
        console.log(E);
    }
}

const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      const { status2 } = await Permissions.askAsync(Permissions.CAMERA);
      if (status2 !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    }
  };

  return (
      <View style={styles.wrapper}>

          <ScrollView>

            <View style={styles.itemWrapper}>

              <View style={styles.imagepart}>
                <ImageBackground
                    style={styles.backgroundimage}
                    imageStyle={{ borderRadius: 20 }}
                    // source={{uri: `${base_url}/static/images/challenges/challenge1.png`}}
                    source={imageChallenge==undefined? require('../assets/images/challenges/challenge2.png') : {uri: imageChallenge}}
                >
                </ImageBackground>
                <View style={styles.imagetextContainer}>
                    <TextInput
                      value={name}
                      onChangeText={text => setName(text)}
                      style={{fontSize: 20, fontWeight: "bold", color: Colors.textPrimary}}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent:'flex-end', paddingRight: 10, marginTop: -50}}>
                  <Button onlyIcon icon="plus" 
                          iconFamily="Entypo"
                          iconSize={30}
                          color={Colors.highlightColor}
                          iconColor={Colors.elementWhite}
                          style={{ width: 40, height: 40 }}
                          onPress={() => {
                            setDialogState({ visible: true });
                          }}>
                  </Button>
                  <Dialog 
                    visible={dialogState.visible}
                    onTouchOutside={() => {
                      setDialogState({ visible: false });
                    }}
                    onHardwareBackPress={() => {
                      setDialogState({ visible: false });
                    }}
                  >
                  <DialogContent style={{width: 400, backgroundColor: Colors.tabColor}}>
                    <View style={{marginRight: -15, flexDirection: 'row', justifyContent:'flex-end'}}>
                      <Button 
                        onlyIcon icon="close" 
                        iconFamily="antdesign" 
                        iconSize={15}
                        color={Colors.elementRed}
                        iconColor={Colors.elementWhite}
                        style={{ width: 25, height: 25, marginTop: 10, marginRight: 10}} 
                        onPress={() => {
                          setDialogState({ visible: false });
                        }}>
                          warning
                      </Button>
                    </View>
                    <View style ={{marginTop: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
                      <Button onlyIcon icon="camera" 
                              iconFamily="Feather"
                              iconSize={70}
                              color={Colors.highlightColor}
                              iconColor={Colors.elementWhite}
                              style={{ width: 100, height: 100 }}
                              onPress={takeImage}>
                      </Button>
                      <Button onlyIcon icon="image" 
                            iconFamily="Feather"
                            iconSize={70}
                            color={Colors.highlightColor}
                            iconColor={Colors.elementWhite}
                            style={{ width: 100, height: 100 }}
                            onPress={pickImage}>
                    </Button>
                  </View>
                  </DialogContent>
                  </Dialog>
                </View>
              </View>

              {/* <View style={styles.footerDivider}/> */}
            </View>

            <View style={styles.itemWrapper}>
              <Input 
                placeholder="Enter description here" 
                placeholderTextColor={Colors.textSecondary}
                color={Colors.textPrimary}
                bgColor={Colors.tabColor}
                borderless={true}
                rounded={false}
                style={{ height: 80 }}
                multiline
                onChange={ (event) => onTextInputChange(event, setDescription) }
              />
              <View style={styles.footerDivider}/>
            </View>

            <View style={styles.itemWrapper}>
              <View style={styles.row}>
                <Text
                  p
                  color={Colors.textPrimary}
                >
                  Tags
                </Text>
                <View style={styles.tagsWrapper}>
                  <Tags
                    // initialText="Enter tag name"
                    tags={tagList}
                    setTags={setTagList}
                    textInputProps={{
                      placeholder: "Enter tag name",
                    }}
                    // initialTags={["euvsvirus", "yourturn"]}
                    // onChangeTags={customTagFunction}
                    onTagPress={(index, tagLabel, event, deleted) =>
                      console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                    }
                    containerStyle={{ justifyContent: "center", backgroundColor: Colors.backgroundColorLight }}
                    inputStyle={{ color: Colors.textSecondary, }}
                    inputContainerStyle={{ backgroundColor: Colors.tabColor, }}
                    renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                      <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                        <View style={styles.tag}>
                          <Text
                            style={{color: Colors.textPrimary}}
                          >
                            {"#" + tag}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
              <View style={styles.footerDivider}/>
            </View>

            <View style={styles.itemWrapper}>
              <View style={styles.row}>
                <Text
                  p
                  color={Colors.textPrimary}
                >
                  Public
                </Text>
                <Switch
                  trackColor={{false: Colors.backgroundColorDark, true: Colors.highlightColor}}
                  thumbColor={Colors.elementWhite}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={ () => toggleSwitch(isPublic, setIsPublic) }
                  value={isPublic}
                  style={{marginBottom: baseMargin}}
                />
              </View>
              <View style={styles.row}>
                <Text
                  p
                  color={Colors.textPrimary}
                >
                  Voting
                </Text>
                <Switch
                  trackColor={{false: Colors.backgroundColorDark, true: Colors.highlightColor}}
                  thumbColor={Colors.elementWhite}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={ () => toggleSwitch(hasVoting, setHasVoting) }
                  value={hasVoting}
                />
              </View>
              <View style={styles.footerDivider}/>
            </View>

            <View style={styles.itemWrapper}>
              <View style={styles.row}>
                <Text
                  p
                  color={Colors.textPrimary}
                >
                  Deadline
                </Text>
               
                <DatePicker
                  style={{width: 150, color: "white"}}
                  date={deadline}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2020-01-01"
                  maxDate="2020-12-31"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  // iconComponent={DateIcon}
                  showIcon={true}
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36,
                      backgroundColor: Colors.tabColor,
                      borderWidth: 0,
                      borderRadius: 10,
                      color: "blue",
                    },
                    dateText: {
                      color: Colors.textPrimary,
                    },
                  }}
                  onDateChange={(date) => setDeadline(date)}
                />

              </View>
              <View style={styles.footerDivider}/>
            </View>

            <View style={styles.buttonContainer}>

                <TouchableOpacity
                    onPress={submitChallenge}>
                    {/* <View style={{backgroundColor: Colors.tabColor, borderRadius:25, width: 150, height: 50}}> */}
                    <View style={{
                        borderWidth: 1,
                        borderColor: Colors.highlightColor,
                        backgroundColor: Colors.tabColor,
                        borderRadius: 25,
                        width: 150,
                        height: 50,
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image
                            source={require('../assets/images/Logo.png')}
                            style={{
                                width: 1061*0.1, 
                                height: 355*0.1,
                            }}
                        />
                    </View>
                </TouchableOpacity>

            </View>

          </ScrollView>

      </View>

  )
}


const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: baseMargin * 2,
      backgroundColor: Colors.backgroundColorLight
    },
  itemWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: baseMargin,
    marginBottom: 0,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  tagsWrapper: {
    flex: 1,
    marginLeft: 100
  }, 
  tag: {
    margin: 5,
    backgroundColor: Colors.tabColor,
    padding: 5,
    borderRadius: 5,
    minWidth: 40,
  },
  footerDivider: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: baseMargin,
    borderBottomColor: Colors.tabColor,
    borderBottomWidth: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: 20
  },
  imagepart: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: 10,
  },
  backgroundimage: {
    width: '100%',
    height: 200,
    opacity: 0.4,
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
  },
  imagetextContainer: {
    marginTop: -34,
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 24,
  },
});
