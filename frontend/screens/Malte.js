import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import Collapsible from 'react-native-collapsible';

import { Button } from 'react-native-material-ui';
import { Checkbox } from 'react-native-material-ui'
import { Badge, Icon, Avatar } from 'react-native-material-ui';
import { RadioButton } from 'react-native-material-ui';
import { ActionButton } from 'react-native-material-ui';

export default function Malte() {

  const [showPic, setShowPic] = React.useState(true);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>



        <View style={styles.firstImageContainer}>
         <Image 
            source={require('../assets/images/profile_picture.jpg') }
            style={{width: 100, height: 100}}
          />
        </View>

        

      <View style={{alignItems: "center"}}>
        <Avatar icon="person" iconColor="white" size={75} iconSize={30}  />
      </View>

      <View style={styles.imageContainer}>
        {showPic && <Image 
          source={require('../assets/images/profile_picture.jpg') }
          style={{width: 100, height: 100}}
        />}
        <Collapsible  collapsed={collapseOpen}>
          <Image 
            source={require('../assets/images/profile_picture.jpg') }
            style={{width: 100, height: 100}}
          />
        </Collapsible >
        <Image 
          source={require('../assets/images/profile_picture.jpg') }
          style={{width: 50, height: 50}}
        />

        <Button 
          primary 
          id="button"
          text="Hide/show first pic" 
          onPress={() => setShowPic(!showPic)}
        />
        <Button 
          accent 
          text="Collapse/expand second pic" 
          onPress={() => setCollapseOpen(!collapseOpen)}
        /> 
        <Button raised primary text="Primary" /> 
        <Button disabled text="Disabled" />

      </View>

      <View>
        <ActionButton 
          actions={
            [
              "1", "2", "3", "4"
            ]
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button raised text="Primary" style={{container: {width: 200}}} /> 
        <Button raised primary text="Primary"  /> 
      </View>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <View>
        <Checkbox label="I Agree" value="agree" checked={isChecked} onCheck={() => setIsChecked(!isChecked)}/>
      </View>

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

const styles = StyleSheet.create({
  firstImageContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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
