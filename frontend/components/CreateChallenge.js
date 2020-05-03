import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Switch, TouchableHighlight, Image, ImageBackground, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from "../constants/Colors"
import { Input, Text } from 'galio-framework';
import DatePicker from 'react-native-datepicker'
import Tags from "react-native-tags";

const baseMargin = 10;
const API_URL_CHALLENGE = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges"


export default function CreateChallenge (props) {

  const [tagList, setTagList] = React.useState();  
  const [name, setName] = React.useState("Enter challenge name here ...");  
  const [description, setDescription] = React.useState();  
  const [isPublic, setIsPublic] = React.useState(false);  
  const [hasVoting, setHasVoting] = React.useState(false);  
  const [deadline, setDeadline] = React.useState(new Date().toISOString().slice(0,10));  
  const [costs, setCosts] = React.useState();  
  const [bet, setBet] = React.useState("Bet");  
  const [proof, setProof] = React.useState("Proof");  

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
    return fetch(API_URL_CHALLENGE, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
          }), 
        body: JSON.stringify(convertedState)
    })
        .then(res => res.json())
        .then(
            result => {
                console.log("Result received from server: ");
                console.log(result);
                console.log("\n");
            },
            (error) => {
                console.log(error);
            }
        )
  };
  
  return (
      
      <View style={styles.wrapper}>

          <ScrollView>

            <View style={styles.itemWrapper}>

              <View style={styles.imagepart}>
                <ImageBackground
                    style={styles.backgroundimage}
                    imageStyle={{ borderRadius: 20 }}
                    source={{uri: "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/static/images/challenges/challenge1.png"}}
                >
                </ImageBackground>

                <View style={styles.imagetextContainer}>
                    <TextInput
                      value={name}
                      onChangeText={text => setName(text)}
                      style={{fontSize: 20, fontWeight: "bold", color: Colors.textPrimary}}
                    />
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
                    textInputProps={{
                      placeholder: "Enter tag name",
                    }}
                    initialTags={["euvsvirus", "yourturn"]}
                    onChangeTags={tags => {
                      console.log(tags)
                      // setTagList(tags)
                    }}
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

                <TouchableHighlight
                    onPress={submitChallenge}>
                    {/* <View style={{backgroundColor: Colors.tabColor, borderRadius:25, width: 150, height: 50}}> */}
                    <View style={{
                        borderWidth: 1,
                        borderColor: Colors.highlightColor,
                        backgroundColor: Colors.tabColor,
                        borderRadius: 25,
                        width: 150,
                        height: 50
                    }}>
                        <Image
                            source={require('../assets/images/Logo.png')}
                            style={{width: 130, height: 40, marginTop: baseMargin, marginLeft: 20}}
                            onPress={props.onPressDone}/>
                    </View>
                </TouchableHighlight>

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