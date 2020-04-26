import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import Collapsible from 'react-native-collapsible';

import { Checkbox } from 'react-native-material-ui';
import { Badge, Icon, Avatar } from 'react-native-material-ui';
import { RadioButton } from 'react-native-material-ui';
import { ActionButton } from 'react-native-material-ui';

import { Block } from 'galio-framework';
import { Button } from 'galio-framework';
import Colors from '../constants/Colors';
import {Text} from 'galio-framework';


export default function Malte() {

  const API_URL_NOTIFICATION = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/notifications"
  
  /*
  var result;
  const [content, setContent] = React.useState([]);
  const [notificationId, setNotificationId] = React.useState([]);
  const [notificationList, setNotificationList] = React.useState([]);

  // Get values for chart and table data as well as meta data - ONLY ONCE
  React.useEffect( () => {
    getInitialState().then( result => setParameters(result) )
  }, []);
  // Get all initial state data from server
  const getInitialState = () => {
  const userId = 1
  const url = API_URL_NOTIFICATION + "?user_id=" + userId.toString()
  // Send HTTP POST request with project name and material number to server
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
              'Content-Type': 'application/json'
            }), 
  })
    .then(res => res.json())
    .then(
      result => {
        console.log("Result received from server: ", result);
        // Execute callback function which sets the parameters from the result file
        if (result !== null) {
          return result;
        }      
      },
      (error) => {
        console.log(error);
      }
    )
  };
  const setParameters = (result) => {
  setNotificationList(result)
  };

  */
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Notification notifText = "Arne hat dich herausgefordert" notifButton = "View Challenge" noButton = {false}></Notification>
      <Notification notifText = "Manu completed the challenge 'Beer Pong Trickshot'" noButton = {true} ></Notification>
      <Notification notifText = "Minh-Kha wants to add you as a friend" notifButton = "Accept" noButton = {false}></Notification>
      <Notification notifText = "Nils is following you now" noButton = {true}></Notification>
      <Notification notifText = "Timo invited you to the challenge 'Cook a healthy meal'" notifButton = "View Challenge" noButton = {false}></Notification>
      <Notification notifText = "Adidas started a new challenge" notifButton = "View Challenge" noButton = {false}></Notification>
    </ScrollView>
  );
}


function Notification({notifText , notifButton , noButton}) {
  const [deleteNotification1, setDeleteNotification1] = React.useState(false);
  return (
    <Collapsible  collapsed={deleteNotification1}>
    <View style={styles.notificationContainer}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
      <View style={styles.textContainer}>
        <Text style={{color: Colors.textPrimary, flexWrap: 'wrap', fontSize: 18}}p>{notifText}</Text>
      </View>
      <Button 
          onlyIcon icon="close" 
          iconFamily="antdesign" 
          iconSize={15}
          color={Colors.elementRed}
          iconColor={Colors.elementWhite}
          style={{ width: 25, height: 25, marginTop: 10, marginRight: 10}} 
          onPress={() => setDeleteNotification1(!deleteNotification1)}>
            warning
          </Button>
      </View>
      <Collapsible collapsed={noButton}>
      <View style={{alignItems: "center", marginBottom: 10}}>
      <Button 
          capitalize size="small" 
          color={Colors.highlightColor}
          style={{height: 40}}>
            <Text style={{color: Colors.textPrimary}}p>{notifButton}</Text>
          </Button>
      </View>
      </Collapsible>
    </View>
    </Collapsible>
  )
}

const _highlightColor = Colors.highlightColor;
const _backgroundColor = Colors.tabBackroundColor;
const _notificationColor = Colors.tabColor;
const _textColor = Colors.textColor;

const styles = StyleSheet.create({
  firstImageContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColorLight,
  },
  notificationContainer: {
    margin: 10, 
    backgroundColor: Colors.tabColor
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    width: 390
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    margin: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  optionIconContainer: {
    marginRight: 12,
  },

});
