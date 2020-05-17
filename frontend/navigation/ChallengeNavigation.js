import * as React from 'react';
import { Text } from 'react-native'
import AddUser from "../screens/AddUser";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import ChallengeDetails from "../screens/ChallengeDetails";
import Colors from "../constants/Colors";
import finishChallenge from "../screens/finishChallenge";
import UploadScreen from "../screens/UploadScreen";
import ShareChallenge from "../screens/shareChallenge";

const DetailsStack = createStackNavigator();
const Details = ({route}) => {
    return (
        <DetailsStack.Navigator initialRouteName="ChallengeDetails" screenOptions={{headerShown: false}}>
            <DetailsStack.Screen
                name="ChallengeDetails"
                component={ChallengeDetails}
                initialParams={{data: route.params.data}}
            />

            <DetailsStack.Screen
                name="addUserToChallenge"
                component={AddUser}
                initialParams={{
                    baseUrl: route.params.data.baseUrl,
                    userId: route.params.data.userId,
                    participantNames: route.params.data.participantNames,
                    participantImages: route.params.data.participantImages,
                }}
            />
            <DetailsStack.Screen name="finishChallenge" component={finishChallenge} />
            <DetailsStack.Screen name="uploadScreen" component={UploadScreen} />
            <DetailsStack.Screen name="shareChallenge" component={ShareChallenge} />
        </DetailsStack.Navigator>
    )
}

const Submissions = ({route}) => {
    return (
        <Text>submissions</Text>
    )
}

const Tab = createMaterialTopTabNavigator();
const ChallengeNavigation = ({route}) => {
    return (
        <Tab.Navigator
            initialRouteName="Details"
            swipeEnabled={true}
            tabBarOptions={{
                activeTintColor: Colors.textPrimary,
                inactiveTintColor: Colors.textPrimary,
                tabStyle: {backgroundColor: Colors.tabColor}
            }}
        >
            <Tab.Screen name="Details" component={Details} initialParams={{data: route.params.data}} />
            <Tab.Screen name="Submissions" component={Submissions} />
        </Tab.Navigator>
    )
}

export default ChallengeNavigation;
