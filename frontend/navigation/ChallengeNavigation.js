import * as React from 'react';
import { Text } from 'react-native'
import AddUser from "../screens/AddUser";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import ChallengeDetails from "../screens/ChallengeDetails";

const DetailsStack = createStackNavigator();
const Details = ({route}) => {
    return (
        <DetailsStack.Navigator initialRouteName="ChallengeDetails">
            <DetailsStack.Screen
                name="ChallengeDetails"
                component={ChallengeDetails}
                initialParams={{data: route.params.data}}
                options={{headerShown: false}}
            />

            <DetailsStack.Screen
                name="addUserToChallenge"
                component={AddUser}
                options={{headerShown: false}}
                initialParams={{
                    baseUrl: route.params.data.baseUrl,
                    userId: route.params.data.userId,
                    participantNames: route.params.data.participantNames,
                    participantImages: route.params.data.participantImages,
                }}
            />
            {/*
            <DetailsStack.Screen name="shareChallenge" component={{}} />
            <DetailsStack.Screen name="finishChallenge" component={{}} />
            */}
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
        >
            <Tab.Screen name="Details" component={Details} initialParams={{data: route.params.data}} />
            <Tab.Screen name="Submissions" component={Submissions} />
        </Tab.Navigator>
    )
}

export default ChallengeNavigation;
