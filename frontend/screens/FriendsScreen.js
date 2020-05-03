import * as React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator()
const ModalStack = createStackNavigator()

const Home = ({ navigation }) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
            <Button
                title="Go to details"
                onPress={() => {
                    navigation.navigate('Details')
                }}
            />
            <Button
                title="Go to modal"
                onPress={() => {
                    navigation.navigate('Modal')
                }}
            />
        </View>
    )
}


const Details = ({ navigation }) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details</Text>
            <Button
                title="Go back"
                onPress={() => {
                    navigation.goBack()
                    // alternative: navigation.navigate('Home')
                }}
            />
        </View>
    )
}

const Modal = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Modal</Text>
            <Button
                title="Go back"
                onPress={() => {
                    navigation.goBack()
                    // alternative: navigation.navigate('Home')
                }}
            />
        </View>
    )
}

const CoreScreen = () => {

    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Details" component={Details} />
        </MainStack.Navigator>
    );
}

const friendsScreen = () => {
    return (
        <ModalStack.Navigator initialRouteName="Home" mode="modal">
            <ModalStack.Screen name="Home" component={CoreScreen} options={{ headerShown: false }}/>
            <ModalStack.Screen name="Modal" component={Modal} />
        </ModalStack.Navigator>
    )
}

export default friendsScreen;
