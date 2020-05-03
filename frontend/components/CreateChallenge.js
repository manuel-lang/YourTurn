import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from "../constants/Colors"

import Tags from "react-native-tags";

export default function CreateChallenge (props) {
  
    return (
        
        <View style={styles.wrapper}>

            <ScrollView>

                {/* <View style={styles.row}> */}

                <Tags
                  initialText="monkey"
                  textInputProps={{
                    placeholder: "Any type of animal"
                  }}
                  initialTags={["dog", "cat", "chicken"]}
                  onChangeTags={tags => console.log(tags)}
                  onTagPress={(index, tagLabel, event, deleted) =>
                    console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                  }
                  containerStyle={{ justifyContent: "center" }}
                  inputStyle={{ backgroundColor: "white" }}
                  renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                    <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                      <Text>{tag}</Text>
                    </TouchableOpacity>
                  )}
                />

                {/* </View> */}

            </ScrollView>

        </View>
  
    )
  }


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 0,
        backgroundColor: Colors.backgroundColorLight
      },
      row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
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
      actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});