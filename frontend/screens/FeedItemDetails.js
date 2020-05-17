import * as React from 'react';
import {StyleSheet, View, Image, TextInput, Dimensions, ImageBackground, TouchableHighlight} from 'react-native';
import Colors from "../constants/Colors"
import {Text} from 'galio-framework';
import {Button} from 'galio-framework';
import {Icon} from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'


const API_URL_CHALLENGE = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges/"
const API_URL_USER = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/users/"

const ChallengeDetails = ( props) => {
    const navigation = useNavigation();

    return (

        <View>
            <View style={styles.tagContainer}>
                {
                    props.tagList.map((tag) =>
                        <Button
                            color={Colors.tabColor}
                            style={styles.tagStyle}
                            key={tag.toString()}
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
                    onPress={() => {
                        navigation.navigate('addUserToChallenge', {test: props.onPressBackTest})
                    }}
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
                    onPress={() => {
                        navigation.navigate('uploadScreen')
                    }}>
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
                    onPress={() => {
                        navigation.navigate('shareChallenge')
                    }}
                />
            </View>
        </View>
    )
}

export default function FeedItemDetails(props) {

    const parseDate = (date) => {
        const parsedDate = new Date(date["$date"])
        const dateNow = Date.now()
        const dateDif = new Date(parsedDate - dateNow)

        return (dateDif.getUTCDate()).toString() + " days left"
    }

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
                        onPressBackTest={props.onPressBackTest}
                    />
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },

    card: {
        width: "100%",
        padding: 0,
        margin: 0,
        textShadowRadius: 0,
        shadowColor: Colors.backgroundColorLight,

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
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20

    },

    secondaryButtonStyle: {
        width: 55,
        height: 50,
    },

    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    ownerImageFeedItem: {
        height: 60,
        width: 60,
        marginRight: 10,
        borderRadius: 50
    }
});
