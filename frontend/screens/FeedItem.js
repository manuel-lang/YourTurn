import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
// import Text from "../constants/Text"
import Colors from "../constants/Colors"

import { Text } from 'galio-framework';
import { Icon } from 'galio-framework';

import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';

import Minhkha from "./Minhkha"
import Collapsible from 'react-native-collapsible';


FeedItem.defaultProps = {
    ownerImageURI: '../assets/images/users/user1.png',
    ownerName: "Name",
    challengeImageURI: '../assets/images/challenges/challenge1.png',
    challengeTitle: "This is the name of the challenge",
    participantImages: [require('../assets/images/users/user2.png'), require('../assets/images/users/user3.png'), require('../assets/images/users/user4.png')],
    participantNames: ["Arne", "Marius", "Nils"],
    likes: 2,
    comments: 3,
    favorit: false,
    privateChallenge: false,
    coopetition: false,
    description: "This is the description of the challenge. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
    tags: ["Health", "Sport"],
    proof: "proof",
    voting: false,
    bet: "bet",
    deadline: {"$date": 1590414228092},
};

export default function FeedItem (props) {

    // const ownerImage = 0
    // const challengeImage = props.challengeImage
    // const ownerName = "Manu"
    // const friends = props.friends
    // const likes = ["Arne", "Malte", "Minh-Kha"]
    // const comments = ["Arne", "Malte", "Minh-Kha", "hello"]
    // const challengeName = props.name
    // const favorit = props.favorit
    // const privateChallenge = props.privateChallenge
    // const coopetition = props.privateChallenge

    // description
    // tagList
    // proof
    // voting
    // bet
    // deadline


    function renderFavoriteIcon() {
      if (!props.favorit) return null;
      return (
          <Ionicons name="ios-bookmark" size={26} color={Colors.elementWhite} style={{marginLeft: 20}}/>
      );
    }

    function renderPrivateIcon() {
      if (!props.privateChallenge) return null;
      return (
          <Entypo name="mask" size={26} color={Colors.elementWhite} style={{marginLeft: 10}} />
      );
    }

    function renderCoopetitionIcon() {
      if (!props.coopetition) return null;
      return (
          <Ionicons name="md-people" size={26} color={Colors.elementWhite} style={{marginLeft: 10}} />
      );
    }

    const onPressDetails = () => {
        // console.log("hello")
        setShowDetails(!showDetails)
    }

    const [showDetails, setShowDetails] = React.useState(false);

    return (

      <View style={styles.wrapperFeedItem}>

        <TouchableOpacity
            style={styles.infopart}
            onPress={onPressDetails}
        >

            <View style={styles.headerFeedItem}>
                <Image source={{uri: props.ownerImageURI}} style={styles.ownerImageFeedItem}/>
                <View style={styles.headerFeedItemText}>
                    <Text color={Colors.textPrimary} bold h5>{props.ownerName}</Text>
                    <Text color={Colors.textSecondary} p>Challenge owner</Text>
                </View>
            </View>

            <View style={styles.imagepart}>
                <ImageBackground
                    style={styles.backgroundimage}
                    imageStyle={{ borderRadius: 20 }}
                    source={{uri: props.challengeImageURI}}
                >
                </ImageBackground>

                <View style={styles.challengeIcons}>
                    {renderFavoriteIcon()}
                    {renderPrivateIcon()}
                    {renderCoopetitionIcon()}
                </View>
                <View style={((props.coopetition || props.favorit || props.privateChallenge) ? styles.titleFeedItem : styles.titleFeedItem2)}>
                    <Text color={Colors.textPrimary} h5 bold >{props.challengeTitle}</Text>
                </View>
            </View>

            <View style={styles.footerFeedItemWrapper}>

            <View style={styles.footerFeedItemContainer}>
                <View style={styles.footerFeedItemElement}>
                <Icon name="thumbs-up" family="Entypo" color={Colors.highlightColor} size={20} style={{marginTop: 4}}/>
                <Text h5 color={Colors.textPrimary} style={{marginLeft: 15}}>
                    {props.likes}
                </Text>
                </View>
            </View>

            <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
                {props.participantImages.slice(0, 3).map( participantImage => {
                  return <Image source={{uri: participantImage}} style={styles.friendsImage}/>
                })}
            </View>

            <View style={styles.footerFeedItemContainer}>
                <View style={styles.footerFeedItemElement}>
                <Icon name="comment" family="MaterialIcons" color={Colors.highlightColor} size={20} style={{marginTop: 4}}/>
                <Text h5 color={Colors.textPrimary} style={{marginLeft: 15}}>
                    {props.comments}
                </Text>
                </View>
            </View>

            </View>

            <View style={styles.footerDivider}/>

            {/* <Collapsible
                collapsed={!showDetails}
                onAnimationEnd={() => {
                    setShowDetails(showDetails)
                }}
            > */}
                {showDetails && <Minhkha
                    baseUrl={props.baseUrl}
                    userId={props.userId}
                    description={props.description}
                    tagList={props.tags}
                    proof={props.proof}
                    voting={props.voting}
                    bet={props.bet}
                    deadline={props.deadline}
                    participantImages={props.participantImages}
                    participantNames={props.participantNames}
                    onPressDetails={onPressDetails}
                />}
            {/* </Collapsible> */}

        </TouchableOpacity>

      </View>

    )
  }


const styles = StyleSheet.create({
    wrapperFeedItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20,
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
      },
      headerFeedItemText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      imagepart: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
      },
      backgroundimage: {
        width: '100%',
        height: 200,
        opacity: 0.4,
        borderRadius: 20,

        flex: 1,
        flexDirection: "row",
      },
      imagetext: {
        marginTop: -34,
        marginLeft: 8,
        fontSize: 24,
      },
      challengeIcons: {
        marginTop: -200,
        marginLeft: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start"
      },
      shortdesc: {
        flex: 6
      },
      descbutton: {
        flex: 3
      },
      footerFeedItemWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: -30
      },

      footerFeedItemContainer: {
        height: 30,
        width: 80,
        marginRight: 10,
      },
      footerFeedItemElement: {
        backgroundColor: Colors.tabColor,
        paddingLeft: 12,
        paddingTop: 0,
        borderRadius: 12,
        flex: 1,
        flexDirection: "row",
      },
      friendsImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.tabColor,
      },
      titleFeedItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 120,
        height: 100,
      },
      titleFeedItem2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 145,
        height: 100,
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
});
