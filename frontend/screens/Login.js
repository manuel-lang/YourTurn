import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import { Button, Input, Text } from 'galio-framework';

import Colors from "../constants/Colors"

console.disableYellowBox = true;

const baseMargin = 10

export default function Splash (props) {

  const factor = 0.2

  const [email, setEmail] = React.useState();  
  const [password, setPassword] = React.useState();  

  const onTextInputChange = (event, changeMethod) => {
    changeMethod(event.nativeEvent.text);
  }

  const onPress = (event, id) => {
    console.log(`Following button pressed: ${id}`)

    switch (id) {

        case "submit":
            console.log(id);
            console.log(`email: ${email}`)
            console.log(`password: ${password}`)
            break;
        case "signup":
            console.log(id);
            break;
        case "forgot":
            console.log(id);
            break;
        case "guest":
            console.log(id);
            break;

    }
  }

  return (
      <View style={styles.container} >
        <TouchableOpacity onPress={props.onPressSplash} style={{padding: 20}}>

          <Image
            source={require('../assets/images/Logo.png')}
            style={{
              width: 1061*factor, 
              height: 355*factor,
            }}
          />

        </TouchableOpacity>

        <View style={styles.captionContainer} >

            <Text p color={Colors.textPrimary}>Kick Ass from Home!</Text>

        </View>

        <View style={styles.inputContainer} >
            <Input
                placeholder="Email" 
                placeholderTextColor={Colors.textSecondary}
                color={Colors.textPrimary}
                bgColor={Colors.tabColor}
                borderless={true}
                rounded={true}
                onChange={ (event) => onTextInputChange(event, setEmail) } 
            />
        </View>

        <View style={styles.inputContainer} >
            <Input
                password={true}
                viewPass={true}
                placeholder="Password" 
                placeholderTextColor={Colors.textSecondary}
                color={Colors.textPrimary}
                bgColor={Colors.tabColor}
                borderless={true}
                rounded={true}
                onChange={ (event) => onTextInputChange(event, setPassword) } 
            />
        </View>

        <View style={styles.submitButtonContainer}>
            <Button
                color={Colors.highlightColor}
                onPress={ (event) => onPress(event, "submit") }
                style={styles.submitButton}
                round={true}
            > 
                Submit 
            </Button>
        </View>
        
        <View style={styles.signupTextCont}>
            <TouchableOpacity 
                onPress={ (event) => onPress(event, "signup") }
            >
                <Text 
                    style={styles.signupButton}
                > 
                    Create Account
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={ (event) => onPress(event, "forgot") }
            >
                <Text 
                    style={styles.signupButton}
                > 
                    Forgot Password
                </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.guestCont}>
            <Text p color={Colors.textPrimary} style={{fontSize:16}}>Continue as </Text>
            <TouchableOpacity 
                onPress={ (event) => onPress(event, "guest") }
            >
                <Text 
                    p
                    style={styles.signupButton}
                > 
                    Guest
                </Text>
            </TouchableOpacity>
        </View>

      </View>
  )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.backgroundColorLight,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: baseMargin*5,
    },
    captionContainer: {
        marginBottom: 3*baseMargin
    },
    inputContainer: {
        margin: 0,
        width: "100%",
    },
    submitButtonContainer: {
        marginTop: 3*baseMargin,
        width: "100%",
    },
    submitButton: {
        margin: 0,
        width: "100%",
    },
    bottomTextCont : {
        // flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    signupTextCont : {
        width: "100%",
        alignItems:'center',
        justifyContent :'space-between',
        marginTop: 3*baseMargin,
        flexDirection:'row'
    },
    signupText: {
        color: Colors.textPrimary,
        fontSize: 16,
        marginRight: 5,
    },
    signupButton: {
        color: Colors.highlightColor,
        fontSize:16,
        fontWeight:'500'
    },
    guestCont : {
        width: "100%",
        alignItems:'center',
        justifyContent :'center',
        marginTop: 6*baseMargin,
        flexDirection:'row'
    },
});
