import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeNavigation from '../navigation/ChallengeNavigation';
import CreateChallenge from '../components/CreateChallenge';
import FeedScreen from '../screens/FeedScreen';


const FeedStack = createStackNavigator()
const FeedNavigation = () => {
    return (
        <FeedStack.Navigator
            initalRouteName="Feed"
            screenOptions={{headerShown: false}}
        >
            <FeedStack.Screen
                name="Feed"
                component={FeedScreen}
            />

            <FeedStack.Screen
                name="ChallengeNavigation"
                component={ChallengeNavigation}
                initialParams={{}}

            />

            <FeedStack.Screen
                name="CreateChallenge"
                component={CreateChallenge}
                initialParams={{}}
            />
        </FeedStack.Navigator>
    )
}

export default FeedNavigation;
