import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
// import Text from "../constants/Text"
import Colors from "../constants/Colors"

import { Text } from 'galio-framework';
import { Icon } from 'galio-framework';

import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';

Profile.defaultProps = {
    ownerImage: require('../assets/images/users/user1.png'),
    ownerName: "Manuel Lang",
    challengeImage: require('../assets/images/challenges/challenge1.png'),
    challengeTitle: "This is the name of the challenge",
    friends: [2, 3, 4],
    friendsImages: [require('../assets/images/users/user2.png'), require('../assets/images/users/user3.png'), require('../assets/images/users/user4.png')],
    friendsNames: ["Arne", "Marius", "Nils"],
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
    deadline: {"$date": 1590414228092}
};

export default function Profile (props) {
  
    return (
  
      <View style={styles.wrapperProfile}>
    
        <View style={styles.imagePart}>
          <ImageBackground
              style={styles.backgroundimage}
              imageStyle={{ borderRadius: 0 }}
              source={props.ownerImage}
          >
          </ImageBackground>

          <ScrollView contentContainerStyle={styles.contentPart}>

            <View style={styles.header}>
              <Text color={Colors.textPrimary} bold h3>Manuel Lang</Text>
              <Text color={Colors.textSecondary} p>Almost Superman</Text>
            </View>

            {/* <View style={styles.footerDivider}></View> */}

            <View style={styles.statsWrapper}>

              <View style={styles.stats}>
                <View style={styles.statsFirstLine}>
                  <Icon 
                    name="check-circle" 
                    family="Feather" 
                    color={Colors.highlightColor} 
                    size={30} 
                    style={styles.statsIcon}
                  />
                  <Text h3 bold color={Colors.textPrimary} >
                      5
                  </Text>
                </View>
                <Text p color={Colors.textSecondary} >
                    Done
                </Text>
              </View>

              <View style={styles.stats}>
                <View style={styles.statsFirstLine}>
                  <Icon 
                    name="group" 
                    family="FontAwesome" 
                    color={Colors.highlightColor} 
                    size={30} 
                    style={styles.statsIcon}
                  />
                  <Text h3 bold color={Colors.textPrimary} >
                      3
                  </Text>
                </View>
                <Text p color={Colors.textSecondary} >
                    Friends
                </Text>
              </View>

              <View style={styles.stats}>
                <View style={styles.statsFirstLine}>
                  <Icon 
                    name="attach-money" 
                    family="MaterialIcons" 
                    color={Colors.highlightColor} 
                    size={30} 
                    style={styles.statsIcon}
                  />
                  <Text h3 bold color={Colors.textPrimary} >
                      8
                  </Text>
                </View>
                <Text p color={Colors.textSecondary} >
                    Coins
                </Text>
              </View>
              
            </View>


            <View style={styles.profileInfoContainer}>
              <View style={styles.profileInfoWrapper}>
                  
                    <Text h5 color={Colors.textPrimary} >
                        Completed Challenges
                    </Text>
                    <Icon 
                      name="check-circle" 
                      family="Feather"
                      color={Colors.elementWhite} 
                      size={30} 
                      style={styles.statsIcon}
                    />
                 
              </View>

              <View style={styles.profileInfoWrapper}>

                    <Text h5 color={Colors.textPrimary} >
                        User Statistics
                    </Text>

                    <Icon 
                      name="line-graph" 
                      family="Entypo" 
                      color={Colors.elementWhite} 
                      size={30} 
                      style={styles.statsIcon}
                    />
                
              </View>

              
            </View>

          </ScrollView>
          
        </View>
    
      </View>
  
    )
  }


const styles = StyleSheet.create({
    wrapperProfile: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 0,
        backgroundColor: Colors.backgroundColorDark
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
      imagePart: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 0,
      },
      contentPart: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 0,
        backgroundColor: Colors.backgroundColorLight,
        width: "90%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 220,
        padding: 30,
      },
      header: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        height: 200,
      },
      statsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
      },
      stats: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        height: 90,
        borderBottomColor: Colors.tabColor,
        borderBottomWidth: 2,
        borderTopColor: Colors.tabColor,
        borderTopWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,
      },
      statsFirstLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
      },
      statsIcon: {
        marginTop: 10,
        marginRight: 5
      },
      profileInfoContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        // height: 200,
        paddingTop: 20,
      },
      profileInfoWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
      },

      backgroundimage: {
        width: '100%',
        height: 300,
        opacity: 0.4,
        // borderRadius: 0,
      
        flex: 1,
        flexDirection: "row",
      },
      imagetext: {
        marginTop: 0,
        marginLeft: 8,
        fontSize: 24,
      },
      challengeIcons: {
        marginTop: 0,
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
        borderBottomColor: Colors.elementWhite,
        borderBottomWidth: 2,
      },
});