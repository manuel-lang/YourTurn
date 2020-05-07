import * as React from "react";
import * as ImagePicker from "expo-image-picker";
import {View, StyleSheet} from "react-native";
import {Button, Icon, Text} from "galio-framework";
import Colors from "../constants/Colors";

const UploadScreen = (props) => {

    const [image, setImage] = React.useState([]);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage({image: result.uri});
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    const takeImage = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage({image: result.uri});
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    return (
        <View style={styles.center}>
            <Icon
                name="upload"
                family="Entypo"
                color={Colors.highlightColor}
                size={200}
                style={{marginTop: 40}}
            />

            <View style={{marginTop: 40}}>
                <Text p bold color={Colors.textPrimary}>Please choose how you would like to upload the proof.</Text>
            </View>

            <View style={styles.buttonContainer}>

                <Button
                    onlyIcon
                    icon="camera"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 100, height: 50, margin: 10}}
                    onPress={takeImage}
                />

                <Button
                    onlyIcon
                    icon="upload"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.highlightColor}
                    iconColor={Colors.elementWhite}
                    style={{width: 100, height: 50, margin: 10}}
                    onPress={pickImage}
                />

                <Button
                    onlyIcon
                    icon="more-vertical"
                    iconFamily="Feather"
                    iconSize={25}
                    color={Colors.tabColor}
                    iconColor={Colors.highlightColor}
                    style={{width: 100, height: 50, margin: 10}}
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
        </View>
    )
}

const styles = StyleSheet.create({
        center: {
        // flex: 1,
        // flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
})

export default UploadScreen;
