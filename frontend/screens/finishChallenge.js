import * as React from 'react';
import {View, StyleSheet} from "react-native";
import {Button, Icon, Text} from "galio-framework";
import Colors from "../constants/Colors";

const finishChallenge = ({navigation}, props) => {

    return (
        <View style={styles.wrapper}>
        <View style={styles.center}>
            <Icon
                name="check-circle"
                family="Feather"
                color={Colors.highlightColor}
                size={200}
                style={{marginTop: 40}}
            />

            <View style={{marginTop: 40, marginBottom: 10}}>
                <Text p bold color={Colors.textPrimary}>Congrats! You mastered this challenge.</Text>
            </View>

            <Text p color={Colors.textPrimary}>Let your friends know who is the greatest.</Text>

            <View style={styles.buttonContainer}>
                {/* <Button
            color={Colors.highlightColor}
            style={{ width: 100, height: 50 }}
            onPress={props.onPressDoneFinished}
          > Back </Button> */}

                <Button
                    onlyIcon
                    icon="instagram"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />

                <Button
                    onlyIcon
                    icon="facebook"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />

                <Button
                    onlyIcon
                    icon="twitter"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />

                <Button
                    onlyIcon
                    icon="social-snapchat"
                    iconFamily="Foundation"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 50, height: 50, margin: 10}}
                />


                {/* <Button
            onlyIcon
            icon="upload"
            iconFamily="Entypo"
            iconSize={30}
            color={Colors.highlightColor}
            iconColor={Colors.elementWhite}
            style={{ width: 100, height: 50, margin: 10  }}
            onPress={props.onPressDoneFinished}
          /> */}

            </View>

            <View style={styles.buttonContainer}>
                <Button
                    color={Colors.highlightColor}
                    style={{width: 100, height: 50}}
                    onPress={() => {
                        navigation.navigate('ChallengeDetails')
                    }}
                > Back </Button>


                {/* <Button
            onlyIcon
            icon="upload"
            iconFamily="Entypo"
            iconSize={30}
            color={Colors.highlightColor}
            iconColor={Colors.elementWhite}
            style={{ width: 100, height: 50, margin: 10  }}
            onPress={props.onPressDoneFinished}
          /> */}

            </View>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.backgroundColorLight
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20

    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
})

export default finishChallenge;
