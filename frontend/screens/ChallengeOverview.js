import * as React from 'react';
import {View, Text} from 'react-native'
import FeedItem from "./FeedItem";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



/*
<Minhkha
    baseUrl={props.baseUrl}
    userId={props.userId}
    description={props.description}
    tagList={props.tags}
    proof={props.proof}
    voting={props.voting}
    bet={props.bet}
    deadline={props.deadline}
    participantImages={props.participantImages}
    participantNames={props.participantNames}
    onPressDetails={onPressDetails}
 */


const Details = () => {
    return (
        <View>
            <FeedItem />
        </View>
    )
}

const Submissions = () => {
    return (
        <Text>ChallengeSubmissions</Text>
    )
}

const Tab = createMaterialTopTabNavigator();
const ChallengeOverview = () => {

    return (
        <Tab.Navigator
            initialRouteName="Details"
            swipeEnabled={true}
        >
            <Tab.Screen name="Details" component={Details} />
            <Tab.Screen name="Submissions" component={Submissions} />
        </Tab.Navigator>
    )
}

export default ChallengeOverview;
