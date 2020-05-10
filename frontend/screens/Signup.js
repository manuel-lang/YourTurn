import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

import { Button, Input, Text } from 'galio-framework';
import DatePicker from 'react-native-datepicker'

import Colors from "../constants/Colors"

console.disableYellowBox = true;

const baseMargin = 10

export default function Signup (props) {

  const factor = 0.2

  const [email, setEmail] = React.useState();  
  const [password, setPassword] = React.useState();
  const [passwordRep, setPasswordRep] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [birthDate, setBirthDate] = React.useState("1990-01-01");

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
            console.log(`passwordRep: ${passwordRep}`)
            console.log(`firstName: ${firstName}`)
            console.log(`lastName: ${lastName}`)
            console.log(`birthDate: ${birthDate}`)
            break;
        // case "signup":
        //     console.log(id);
        //     break;
        // case "forgot":
        //     console.log(id);
        //     break;
        // case "guest":
        //     console.log(id);
        //     break;

    }
  }

return (
<ImageBackground 
    source={require('../assets/images/challenges/challenge1.png')} 
    style={styles.image}
>
    <View style={styles.container} >

        <Image
            source={require('../assets/images/Logo.png')}
            style={{
                width: 1061*factor, 
                height: 355*factor,
            }}
        />


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

        <View style={styles.inputContainer} >
            <Input
                password={true}
                viewPass={true}
                placeholder="Repeat password" 
                placeholderTextColor={Colors.textSecondary}
                color={Colors.textPrimary}
                bgColor={Colors.tabColor}
                borderless={true}
                rounded={true}
                onChange={ (event) => onTextInputChange(event, setPasswordRep) } 
            />
        </View>

        <View style={styles.inputContainer} >
            <Input
                placeholder="First name" 
                placeholderTextColor={Colors.textSecondary}
                color={Colors.textPrimary}
                bgColor={Colors.tabColor}
                borderless={true}
                rounded={true}
                onChange={ (event) => onTextInputChange(event, setFirstName) } 
            />
        </View>

        <View style={styles.inputContainer} >
            <Input
                placeholder="Last name" 
                placeholderTextColor={Colors.textSecondary}
                color={Colors.textPrimary}
                bgColor={Colors.tabColor}
                borderless={true}
                rounded={true}
                onChange={ (event) => onTextInputChange(event, setLastName) } 
            />
        </View>

        <View style={styles.row}>
                <Text
                  p
                  color={Colors.textPrimary} style={{fontSize:16, marginLeft: baseMargin*1.5}}
                >
                  Date of birth
                </Text>
               
                <DatePicker
                  style={{width: 150, color: "white"}}
                  date={birthDate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1900-01-01"
                  maxDate="2020-12-31"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36,
                      backgroundColor: Colors.tabColor,
                      borderWidth: 0,
                      borderRadius: 20,
                      color: "blue",
                    },
                    dateText: {
                      color: Colors.textPrimary,
                    },
                  }}
                  onDateChange={(date) => setBirthDate(date)}
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
        
    </View>
</ImageBackground>
)}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.backgroundColorLight,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: baseMargin*5,
        opacity: 0.9
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
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
    row: {
        // flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: baseMargin,
    },
});
