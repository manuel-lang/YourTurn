import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import Collapsible from 'react-native-collapsible';

import { Checkbox } from 'react-native-material-ui'
import { Badge, Icon, Avatar } from 'react-native-material-ui';
import { RadioButton } from 'react-native-material-ui';
import { ActionButton } from 'react-native-material-ui';
import { Text } from 'galio-framework';
import { Block } from 'galio-framework';
import { Button } from 'galio-framework';
import Colors from '../constants/Colors';


export default function Malte() {

  const [deleteNotification1, setDeleteNotification1] = React.useState(false);
  const [deleteNotification2, setDeleteNotification2] = React.useState(false);
  const [deleteNotification3, setDeleteNotification3] = React.useState(false);
  const [deleteNotification4, setDeleteNotification4] = React.useState(false);
  const [deleteNotification5, setDeleteNotification5] = React.useState(false);
  const [deleteNotification6, setDeleteNotification6] = React.useState(false);
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
      <Collapsible  collapsed={deleteNotification1}>
      <Block style={styles.notificationContainer}>
        <Block style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Block style={styles.textContainer}>
          <Text style={{color: 'white'}}p>Arne invited you to the challenge "Do a Barrel Roll"</Text>
        </Block>
        <Block style={{marginTop: 10, marginRight: 10}}>
        <Button 
            onlyIcon icon="close" 
            iconFamily="antdesign" 
            iconSize={15}
            color="orangered" 
            iconColor="#fff" 
            style={{ width: 25, height: 25}} 
            onPress={() => setDeleteNotification1(!deleteNotification1)}>
              warning
            </Button>
        </Block>
        </Block>
        <Block style={{alignItems: "center", marginBottom: 10}}>
        <Button 
            capitalize size="small" 
            color="#00bcd4"
            style={{height: 40}}>
              <Text style={{color: 'black'}}p>View Challenge</Text>
            </Button>
        </Block>
      </Block>
      </Collapsible>
      <Collapsible  collapsed={deleteNotification2}>
      <Block style={styles.notificationContainer}>
        <Block style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Block style={styles.textContainer}>
          <Text style={{color: 'white'}}p>Manu completed the challenge "Beer Pong Trickshot"</Text>
        </Block>
        <Block style={{marginTop: 10, marginRight: 10}}>
        <Button 
            onlyIcon icon="close" 
            iconFamily="antdesign" 
            iconSize={15}
            color="orangered" 
            iconColor="#fff" 
            style={{ width: 25, height: 25}} 
            onPress={() => setDeleteNotification2(!deleteNotification2)}>
              warning
            </Button>
        </Block>
        </Block>
      </Block>
      </Collapsible>
      <Collapsible  collapsed={deleteNotification3}>
      <Block style={styles.notificationContainer}>
        <Block style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Block style={styles.textContainer}>
          <Text style={{color: 'white'}}p>Minh-Kha wants to add you as a friend</Text>
        </Block>
        <Block style={{marginTop: 10, marginRight: 10}}>
        <Button 
            onlyIcon icon="close" 
            iconFamily="antdesign" 
            iconSize={15}
            color="orangered" 
            iconColor="#fff" 
            style={{ width: 25, height: 25}} 
            onPress={() => setDeleteNotification3(!deleteNotification3)}>
              warning
            </Button>
        </Block>
        </Block>
        <Block style={{alignItems: "center", marginBottom: 10}}>
        <Button 
            capitalize size="small" 
            color="#00bcd4"
            style={{height: 40}} 
            onPress={() => setDeleteNotification3(!deleteNotification3)}>
              <Text style={{color: 'black'}}p>Accept</Text>
            </Button>
        </Block>
      </Block>
      </Collapsible>
      <Collapsible  collapsed={deleteNotification4}>
      <Block style={styles.notificationContainer}>
        <Block style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Block style={styles.textContainer}>
          <Text style={{color: 'white'}}p>Nils is following you now</Text>
        </Block>
        <Block style={{marginTop: 10, marginRight: 10}}>
        <Button 
            onlyIcon icon="close" 
            iconFamily="antdesign" 
            iconSize={15}
            color="orangered" 
            iconColor="#fff" 
            style={{ width: 25, height: 25}} 
            onPress={() => setDeleteNotification4(!deleteNotification4)}>
              warning
            </Button>
        </Block>
        </Block>
      </Block>
      </Collapsible>
      <Collapsible  collapsed={deleteNotification5}>
      <Block style={styles.notificationContainer}>
        <Block style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Block style={styles.textContainer}>
          <Text style={{color: 'white'}}p>Timo invited you to the challenge "Cook a healthy meal"</Text>
        </Block>
        <Block style={{marginTop: 10, marginRight: 10}}>
        <Button 
            onlyIcon icon="close" 
            iconFamily="antdesign" 
            iconSize={15}
            color="orangered" 
            iconColor="#fff" 
            style={{ width: 25, height: 25}} 
            onPress={() => setDeleteNotification5(!deleteNotification5)}>
              warning
            </Button>
        </Block>
        </Block>
        <Block style={{alignItems: "center", marginBottom: 10}}>
        <Button 
            capitalize size="small" 
            color="#00bcd4"
            style={{height: 40}}>
              <Text style={{color: 'black'}}p>View Challenge</Text>
            </Button>
        </Block>
      </Block>
      </Collapsible>
      <Collapsible  collapsed={deleteNotification6}>
      <Block style={styles.notificationContainer}>
        <Block style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Block style={styles.textContainer}>
          <Text style={{color: 'white'}}p>Adidas started a new challenge</Text>
        </Block>
        <Block style={{marginTop: 10, marginRight: 10}}>
        <Button 
            onlyIcon icon="close" 
            iconFamily="antdesign" 
            iconSize={15}
            color="orangered" 
            iconColor="#fff" 
            style={{ width: 25, height: 25}} 
            onPress={() => setDeleteNotification6(!deleteNotification6)}>
              warning
            </Button>
        </Block>
        </Block>
        <Block style={{alignItems: "center", marginBottom: 10}}>
        <Button 
            capitalize size="small" 
            color="#00bcd4"
            style={{height: 40}}>
              <Text style={{color: 'black'}}p>View Challenge</Text>
            </Button>
        </Block>
      </Block>
      </Collapsible>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

function Notification(props) {
  return (
  props.content,
  props.id
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
    backgroundColor: _backgroundColor,
  },
  notificationContainer: {
    margin: 10, 
    backgroundColor: _notificationColor
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    width: 400
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
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  },  
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
