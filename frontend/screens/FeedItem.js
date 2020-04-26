import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Colors from "../constants/Colors"

import { Text } from 'galio-framework';
import { Icon } from 'galio-framework';

import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';


const images = {
    user0: require('../assets/images/users/user0.png'),
    user1: require('../assets/images/users/user1.png'),
    user2: require('../assets/images/users/user2.png'),
    user3: require('../assets/images/users/user3.png'),
    user4: require('../assets/images/users/user4.png'),
    user5: require('../assets/images/users/user5.png'),
    challenge1: require('../assets/images/challenges/challenge1.png'),
    // challenge2: require('../assets/images/challenges/challenge2.png'),
    // challenge3: require('../assets/images/challenges/challenge3.png'),
    // challenge4: require('../assets/images/challenges/challenge4.png'),
    // challenge5: require('../assets/images/challenges/challenge5.png'),
  }

export default function FeedItem (props) {

    const ownerId = 0
    const challengeId = 1
    const name = "Manu"
    const friends = props.friends
    const likes = ["Arne", "Malte", "Minh-Kha"]
    const comments = ["Arne", "Malte", "Minh-Kha", "hello"]
    const title = props.name
    const favorit = props.favorit
    const privateChallenge = props.privateChallenge
    const coopetition = props.privateChallenge
    
  
    function renderFavoriteIcon() {
      if (!favorit) return null;
      return (
          <Ionicons name="ios-bookmark" size={26} color={Colors.tabIconDefault} style={{marginLeft: 20}}/>
      );
    }
  
    function renderPrivateIcon() {
      if (!privateChallenge) return null;
      return (
          <Entypo name="mask" size={26} color={Colors.tabIconDefault} style={{marginLeft: 10}} />
      );
    }
  
    function renderCoopetitionIcon() {
      if (!coopetition) return null;
      return (
          <Ionicons name="md-people" size={26} color={Colors.tabIconDefault} style={{marginLeft: 10}} />
      );
    }
  
    return (
  
      <View style={styles.wrapperFeedItem}>

        <TouchableOpacity
            style={styles.infopart}
            onPress={() => props.setShowDetails(!props.showDetails)}
        >
  
            <View style={styles.headerFeedItem}>
            <Image source={images["user" + ownerId]} style={styles.ownerImageFeedItem}/>
            <View style={styles.headerFeedItemText}>
                <Text color={Colors.textColor} bold h5>{name}</Text>
                <Text color={Colors.secondaryTextColor} p>Challenge owner</Text>
            </View>
            </View>
    
            <View style={styles.imagepart}>
            <ImageBackground
                style={styles.backgroundimage}
                imageStyle={{ borderRadius: 20 }}
                source={images["challenge" + challengeId] }
            >
            </ImageBackground>
    
            <View style={styles.challengeIcons}>
                {renderFavoriteIcon()}
                {renderPrivateIcon()}
                {renderCoopetitionIcon()}
            </View>
    
            <View style={styles.titleFeedItem}>
                <Text color={Colors.textColor} h5 bold >{title}</Text>
            </View>
            </View>
    
            <View style={styles.footerFeedItemWrapper}>
    
            <View style={styles.footerFeedItemContainer}>
                <View style={styles.footerFeedItemElement}>
                <Icon name="thumbs-up" family="Entypo" color={Colors.highlightColor} size={20} style={{marginTop: 4}}/>
                <Text h5 color={Colors.textColor} style={{marginLeft: 15}}>
                    {likes.length}
                </Text>
                </View>
            </View>
    
            <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
                {/* {
                friends.map( friendId => {
                    <Image source={images["user" + friendId]} style={styles.friendsImage}/>
                })
                } */}
                <Image source={images["user" + 1]} style={styles.friendsImage}/>
                <Image source={images["user" + 3]} style={styles.friendsImage}/>
                <Image source={images["user" + 5]} style={styles.friendsImage}/>
            </View>
    
            <View style={styles.footerFeedItemContainer}>
                <View style={styles.footerFeedItemElement}>
                <Icon name="comment" family="MaterialIcons" color={Colors.highlightColor} size={20} style={{marginTop: 4}}/>
                <Text h5 color={Colors.textColor} style={{marginLeft: 15}}>
                    {comments.length}
                </Text>
                </View>
            </View>     
    
            </View>
            
            <View style={styles.footerDivider}></View>

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
        marginTop: 20,
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
        marginTop: 60
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
        marginTop: 40,
        padding: 20,
        textAlign: "center",
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