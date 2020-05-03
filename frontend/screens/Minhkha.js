import * as React from 'react';
import {StyleSheet, View, Image, TextInput, Dimensions, ImageBackground, TouchableHighlight} from 'react-native';
import Colors from "../constants/Colors"
import {Text} from 'galio-framework';
import {Button} from 'galio-framework';
import {Icon} from 'galio-framework';
import * as ImagePicker from 'expo-image-picker'


const API_URL_CHALLENGE = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges/"
const API_URL_USER = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/users/"

const ChallengeDetails = (props) => {
    return (
        <View>
            <View style={styles.tagContainer}>
                {
                    props.tagList.map((tag) =>
                        <Button
                            color={Colors.tabColor}
                            style={styles.tagStyle}
                        >
                            {"#" + tag}
                        </Button>
                    )
                }
            </View>

            <View style={styles.rowContainer}>
                <Text h5 bold color={Colors.textPrimary}>Proof</Text>
                <Button
                    color={Colors.highlightColor}
                    style={styles.proofStyle}
                >
                    {props.proof}
                </Button>
            </View>

            {/*
      <View style={styles.rowContainer}>
        <Text h5 bold color={Colors.textPrimary}>Voting</Text>
        <Button
          color={Colors.highlightColor}
          style={styles.proofStyle}
        >
          {props.voting}
        </Button>
      </View>


      <View style={styles.rowContainer}>
        <Text h5 bold color={Colors.textPrimary}>Bet</Text>
        <Button
          color={Colors.highlightColor}
          style={styles.proofStyle}
        >
          {props.bet}
        </Button>
      </View>
      */}

            <View style={styles.rowContainer}>
                <Text h5 bold color={Colors.textPrimary}>Deadline</Text>
                <Button
                    color={Colors.highlightColor}
                    style={styles.proofStyle}
                >
                    {props.deadline}
                </Button>
            </View>

            {/* <View style={styles.rowContainer}>
        <Text h5 bold color={Colors.textPrimary}>Progress</Text>
        <Block style={styles.progressContainer}>
          <Slider
            // disabled
            maximumValue={30}
            value={10}
            activeColor={Colors.highlightColor}
          />
        </Block>
      </View> */}

            <View style={styles.buttonContainer}>
                {/*
                <Button
                    onlyIcon
                    icon="thumbs-up"
                    iconFamily="Entypo"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={styles.secondaryButtonStyle}
                />

                <Button
                    onlyIcon
                    icon="comment"
                    iconFamily="MaterialIcons"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={styles.secondaryButtonStyle}
                />
                */}

                <Button
                    onlyIcon
                    icon="add-user"
                    iconFamily="Entypo"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={styles.secondaryButtonStyle}
                    onPress={props.onPressAddUser}
                />


                {/*
                <Button
                  onlyIcon
                  icon="check"
                  iconFamily="Entypo"
                  iconSize={30}
                  color={Colors.highlightColor}
                  iconColor={Colors.elementWhite}
                  style={{ width: 100, height: 50 }}
                  onPress={props.onPressDone}
                />
                */}

                <TouchableHighlight
                    onPress={props.onPressDone}>
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
                            style={{width: 130, height: 40, marginTop: 10, marginLeft: 20}}
                            onPress={props.onPressDone}/>
                    </View>
                </TouchableHighlight>

                <Button
                    onlyIcon
                    icon="share"
                    iconFamily="Entypo"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={styles.secondaryButtonStyle}
                />
            </View>
        </View>
    )
}

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        fetch(`${this.props.baseUrl}/users/${this.props.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then((response) => response.json())
            .then((json) => JSON.parse(json))
            .then((json) => {
                this.setState({
                    "data": json["friends"].filter(friend => {
                        return this.props.participantNames.indexOf(friend["name"]) === -1;
                    }).map(friend => {
                        return [friend["name"], friend["id"]];
                    })
                });
            })
            .catch((error) => console.error(error))
    }

    render() {
        return (
            <View>

                <View style={{marginTop: 40}}>
                    <Text p bold color={Colors.textPrimary}>Whose asses do you want to kick?</Text>
                </View>

                {this.state.data.map((friend) => {
                    console.log("Friend " + friend[0] + friend[1]);
                    return <UserCard
                        key={friend[1]}
                        title={friend[0]}
                        image={{uri: `${this.props.baseUrl}/static/images/users/user${friend[1]}.png`}}
                        subtitle="Friend"
                    />
                })
                }

                <View style={{alignItems: "center", marginTop: 20}}>
                    <Button
                        onlyIcon
                        icon="check"
                        iconFamily="Entypo"
                        iconSize={30}
                        color={Colors.highlightColor}
                        iconColor={Colors.elementWhite}
                        style={{width: 100, height: 50}}
                        onPress={this.props.onPressAddUserFinished}
                    />
                </View>
            </View>
        )
    }
}

const UserCard = (props) => {

    const [buttonPressed, setButtonPressed] = React.useState(false);

    const onPressUserCard = () => {
        setButtonPressed(!buttonPressed)
        console.log("pressed user card")
    }

    return (
        <View style={{backgroundColor: Colors.backgroundColorLight}}>

            <View style={styles.ownerCard}>
                {/* <Button onPress={onPressUserCard} style={{height: "100%", width: "100%"}}>
          <GCard
          flex
          borderless
          style={!buttonPressed ? styles.ownerInnerCard : styles.ownerInnerCardPressed}
          title={props.title}
          caption={props.subtitle}
          location="Frankfurt, Germany"
          avatar="http://i.pravatar.cc/100?id=skater"
        />
        </Button> */}

                <TouchableHighlight onPress={onPressUserCard} style={{width: "100%", height: "100%"}}>
                    <View
                        style={{flex: 1, flexDirection: "column", alignItems: "center", width: "100%", height: "100%"}}>
                        <View style={styles.headerFeedItem}>
                            <Image source={props.image} style={styles.ownerImageFeedItem}/>
                            <View style={styles.headerFeedItemText}>
                                <Text color={Colors.textPrimary} bold h5 style={{marginTop: 50}}>{props.title}</Text>
                                <Text color={Colors.textSecondary} p>Friend</Text>
                            </View>

                            {buttonPressed && <Icon
                                name="check"
                                family="Feather"
                                color={Colors.highlightColor}
                                size={30}
                                style={styles.statsIcon}
                            />}
                        </View>

                        <View style={styles.footerDivider}></View>
                    </View>
                </TouchableHighlight>

            </View>
        </View>
    )
}

const Done = (props) => {

    return (
        <View style={styles.center}>
            <Icon
                name="check-circle"
                family="Feather"
                color={Colors.highlightColor}
                size={200}
                style={{marginTop: 40}}
            />

            <View style={{marginTop: 40, marginBottom: 10}}>
                <Text p bold color={Colors.textPrimary}>Congrats! You mastered this challenge.</Text>
            </View>

            <Text p color={Colors.textPrimary}>Let your friends know who is the greatest.</Text>

            <View style={styles.buttonContainer}>
                {/* <Button
            color={Colors.highlightColor}
            style={{ width: 100, height: 50 }}
            onPress={props.onPressDoneFinished}
          > Back </Button> */}

                <Button
                    onlyIcon
                    icon="instagram"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />

                <Button
                    onlyIcon
                    icon="facebook"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />

                <Button
                    onlyIcon
                    icon="twitter"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />

                <Button
                    onlyIcon
                    icon="social-snapchat"
                    iconFamily="Foundation"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />


                {/* <Button
            onlyIcon
            icon="upload"
            iconFamily="Entypo"
            iconSize={30}
            color={Colors.highlightColor}
            iconColor={Colors.elementWhite}
            style={{ width: 100, height: 50, margin: 10  }}
            onPress={props.onPressDoneFinished}
          /> */}

            </View>

            <View style={styles.buttonContainer}>
                <Button
                    color={Colors.highlightColor}
                    style={{width: 100, height: 50}}
                    onPress={props.onPressDoneFinished}
                > Back </Button>


                {/* <Button
            onlyIcon
            icon="upload"
            iconFamily="Entypo"
            iconSize={30}
            color={Colors.highlightColor}
            iconColor={Colors.elementWhite}
            style={{ width: 100, height: 50, margin: 10  }}
            onPress={props.onPressDoneFinished}
          /> */}

            </View>

        </View>
    )
}

const Upload = (props) => {

    const [image, setImage] = React.useState([]);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage({image: result.uri});
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    const takeImage = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage({image: result.uri});
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    return (
        <View style={styles.center}>
            <Icon
                name="upload"
                family="Entypo"
                color={Colors.highlightColor}
                size={200}
                style={{marginTop: 40}}
            />

            <View style={{marginTop: 40}}>
                <Text p bold color={Colors.textPrimary}>Please choose how you would like to upload the proof.</Text>
            </View>

            <View style={styles.buttonContainer}>

                <Button
                    onlyIcon
                    icon="camera"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 100, height: 50, margin: 10}}
                    onPress={takeImage}
                />

                <Button
                    onlyIcon
                    icon="upload"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.highlightColor}
                    iconColor={Colors.elementWhite}
                    style={{width: 100, height: 50, margin: 10}}
                    onPress={pickImage}
                />

                <Button
                    onlyIcon
                    icon="more-vertical"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 100, height: 50, margin: 10}}
                />


                {/* <Button
          onlyIcon
          icon="upload"
          iconFamily="Entypo"
          iconSize={30}
          color={Colors.highlightColor}
          iconColor={Colors.elementWhite}
          style={{ width: 100, height: 50, margin: 10  }}
          onPress={props.onPressDoneFinished}
        /> */}

            </View>
        </View>
    )
}

const AddUserDone = (props) => {

    return (
        <View style={styles.center}>
            <Icon
                name="check-circle"
                family="Feather"
                color={Colors.highlightColor}
                size={200}
                style={{marginTop: 40}}
            />

            <View style={{marginTop: 40}}>
                <Text p bold color={Colors.textPrimary}>Your friends have been invited!</Text>
            </View>

            <View style={styles.buttonContainer}>

                <Button
                    color={Colors.highlightColor}
                    style={{width: 100, height: 50}}
                    onPress={props.onPressAddUserDoneFinished}
                > Back </Button>

                {/* <Button
          onlyIcon
          icon="upload"
          iconFamily="Entypo"
          iconSize={30}
          color={Colors.highlightColor}
          iconColor={Colors.elementWhite}
          style={{ width: 100, height: 50, margin: 10  }}
          onPress={props.onPressDoneFinished}
        /> */}

            </View>
        </View>
    )
}

export default function Minhkha(props) {

    const onPressAddUser = (event) => {
        // console.log(event);
        setAddUserOpen(true);
    }


    const onPressDone = (event) => {
        // console.log(event);
        setUploadOpen(true);
    }

    const onPressUploadFinished = (event) => {
        // console.log(event);
        setUploadOpen(false);
        setDoneOpen(true);
    }

    const onPressAddUserFinished = (event) => {
        // console.log(event);
        setAddUserOpen(false);
        setAddUserDoneOpen(true);
    }

    const onPressAddUserDoneFinished = (event) => {
        // console.log("helloooooo");
        setAddUserDoneOpen(false);
    }

    const onPressDoneFinished = (event) => {
        // console.log(event);
        setDoneOpen(false);
    }

    const parseDate = (date) => {
        const parsedDate = new Date(date["$date"])
        const dateNow = Date.now()
        const dateDif = new Date(parsedDate - dateNow)

        return (dateDif.getUTCDate()).toString() + " days left"
    }

    const [uploadOpen, setUploadOpen] = React.useState(false);
    const [doneOpen, setDoneOpen] = React.useState(false);
    const [addUserOpen, setAddUserOpen] = React.useState(false);
    const [addUserDoneOpen, setAddUserDoneOpen] = React.useState(false);

    return (

            <View style={styles.card} >
                <View style={styles.contentContainer}>
                    <View style={styles.descriptionContainer}>
                        <Text p color={Colors.textPrimary}>{props.description}</Text>
                    </View>

                    <ChallengeDetails
                        tagList={props.tagList}
                        proof={props.proof}
                        voting={props.voting}
                        bet={props.bet}
                        deadline={parseDate(props.deadline)}
                        onPressAddUser={onPressAddUser}
                        onPressDone={onPressDone}
                    />

                    {addUserOpen &&
                    <AddUser
                        baseUrl={props.baseUrl}
                        userId={props.userId}
                        participantNames={props.participantNames}
                        participantImages={props.participantImages}
                        onPressAddUserFinished={onPressAddUserFinished}
                    />
                    }

                    {addUserDoneOpen &&
                    <AddUserDone
                        friendsNames={props.friendsNames}
                        friendsImages={props.friendsImages}
                        onPressAddUserDoneFinished={onPressAddUserDoneFinished}
                    />
                    }

                    {doneOpen &&
                    <Done
                        onPressDoneFinished={onPressDoneFinished}
                    />
                    }

                    {uploadOpen &&
                    <Upload
                        onPressUploadFinished={onPressUploadFinished}
                    />
                    }

                    <View style={{alignItems: "center", marginTop: 30}}>
                        <Button
                            onlyIcon
                            icon="up"
                            iconFamily="AntDesign"
                            iconSize={25}
                            color={Colors.backgroundColorLight}
                            iconColor={Colors.elementWhite}
                            style={styles.secondaryButtonStyle}
                            onPress={props.onPressDetails}
                        />
                    </View>

                    <View style={styles.footerDivider}></View>

                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.highlightColor,
        marginTop: 20
    },

    card: {
        width: "100%",
        padding: 0,
        margin: 0,
        // backgroundColor: Colors.highlightColor,
        textShadowRadius: 0,
        shadowColor: Colors.backgroundColorLight,

    },

    ownerCard: {
        marginTop: 20,
        flex: 1,
        padding: 0,
        height: 80,
        width: "100%",
        backgroundColor: Colors.backgroundColorLight,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center"
    },

    imageContainer: {
        alignItems: 'center',
        marginBottom: 0,
        backgroundColor: Colors.backgroundColorLight,
    },

    image: {
        marginTop: 0,
        width: '100%',
        height: 300,
        borderRadius: 0,
    },

    contentContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: Colors.backgroundColorLight
    },

    titleContainer: {
        alignItems: "flex-start",
        marginBottom: 20
    },

    descriptionContainer: {
        alignItems: "flex-start"
    },


    tagContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        margin: 15,
    },

    tagStyle: {
        width: 80,
        height: 30,
        marginRight: 10,
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 10,
    },

    feedbackContainer: {
        backgroundColor: Colors.backgroundColorLight
    },

    feedback: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        margin: 10
    },

    proofStyle: {
        width: 150,
        height: 30,
        marginLeft: 10,
    },

    progressContainer: {
        flex: 1,
        paddingLeft: 50
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20
    },

    secondaryButtonStyle: {
        width: 55,
        height: 50,
    },

    center: {
        // flex: 1,
        // flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },

    footerDivider: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: Colors.tabColor,
        borderBottomWidth: 2,
    },

    ownerImageFeedItem: {
        height: 60,
        width: 60,
        marginRight: 10,
        borderRadius: 50
    },
    headerFeedItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
    },
    headerFeedItemText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },

});
