import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { Button } from 'react-native-material-ui';
import { Toolbar } from 'react-native-material-ui';
import { Snackbar } from 'react-native-material-ui';
import Collapsible from 'react-native-collapsible';
import { Card } from 'react-native-material-ui';


export default function AnotherScreen() {

  const [showPic, setShowPic] = React.useState(true);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [snackBarVisible, setSnackBarVisible] = React.useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      <View 
        style={styles.cardContainer}
      >
        <View
         style={styles.card}
        >
          <Card
            onPress={() => setCollapseOpen(!collapseOpen)}
          >
            <Image 
              source={require('../assets/images/profile_picture.jpg') }
              style={{width: "100%", height: 100}}
              // style={{width: "100%", height: (!collapseOpen ? 100 : 400)}}
            />
            <View style={styles.cardText}>
              <Text style={{marginBottom: 10, fontWeight: "bold", fontSize: 20}}>Hello world!</Text>
              <Text style={{fontSize: 15}}>Sexy asian alert</Text>
              <Text style={{fontSize: 15}}>Sexy asian alert</Text>

              <Collapsible  collapsed={!collapseOpen}>
                <Text style={{fontSize: 15}}>"Wow"</Text>
                <Text style={{fontSize: 15}}>"Totally agree"</Text>
                <Text style={{fontSize: 15}}>More information 3</Text>
                <Text style={{fontSize: 15}}>More information 4</Text>

                <Button 
                  accent 
                  text="Contact" 
                  onPress={() => console.log("contact")}
                /> 

              </Collapsible >
            </View>
          </Card>
        </View>

        <View
         style={styles.card}
        >
          <Card>
            <Image 
              source={require('../assets/images/profile_picture.jpg') }
              style={{width: "100%", height: 100}}
            />
            <View style={styles.cardText}>
              <Text style={{marginBottom: 10, fontWeight: "bold", fontSize: 20}}>Hello world!</Text>
              <Text style={{fontSize: 15}}>Sexy asian alert</Text>
              <Text style={{fontSize: 15}}>Sexy asian alert</Text>
            </View>
          </Card>
        </View>

        <View
         style={styles.card}
        >
          <Card>
            <Image 
              source={require('../assets/images/profile_picture.jpg') }
              style={{width: "100%", height: 100}}
            />
            <View style={styles.cardText}>
              <Text style={{marginBottom: 10, fontWeight: "bold", fontSize: 20}}>Hello world!</Text>
              <Text style={{fontSize: 15}}>Sexy asian alert</Text>
              <Text style={{fontSize: 15}}>Sexy asian alert</Text>
            </View>
          </Card>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    width: "100%",
    padding: 5,
  }, 
  cardText: {
    padding: 10,
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
