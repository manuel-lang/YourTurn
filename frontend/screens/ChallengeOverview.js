import * as React from 'react';
import {View, Text} from 'react-native'
import FeedItem from "./FeedItem";
import AddUser from "./AddUser";
import UploadScreen from './UploadScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Minhkha from "./Minhkha";

const DetailsContent = ({route}) => {
    return (
        <View>
            <FeedItem
                ownerImageURI={route.params.data.ownerImageURI}
                ownerName={route.params.data.ownerName}
                baseUrl={route.params.data.baseUrl}
                userId={route.params.data.userId}
                challengeImageURI={route.params.data.challengeImageURI}
                challengeTitle={route.params.data.challengeTitle}
                participantImages={route.params.data.participantImages}
                participantNames={route.params.data.participantNames}
                likes={route.params.data.likes}
                comments={route.params.data.comments}
                favorit={route.params.data.favorit}
                privateChallenge={route.params.data.privateChallenge}
                coopetition={route.params.data.coopetition}
                description={route.params.data.description}
                tags={route.params.data.tags}
                proof={route.params.data.proof}
                voting={route.params.data.voting}
                bet={route.params.data.bet}
                deadline={route.params.data.deadline}
            />
            <Minhkha
                baseUrl={route.params.data.baseUrl}
                userId={route.params.data.userId}
                description={route.params.data.description}
                tagList={route.params.data.tags}
                proof={route.params.data.proof}
                voting={route.params.data.voting}
                bet={route.params.data.bet}
                deadline={route.params.data.deadline}
                participantImages={route.params.data.participantImages}
                participantNames={route.params.data.participantNames}
                onPressDetails={() => []}
            />
        </View>
    )
}

const DetailsStack = createStackNavigator();
const Details = ({route}) => {
    return (
        <DetailsStack.Navigator initialRouteName="DetailsContent">
            <DetailsStack.Screen
                name="DetailsContent"
                component={DetailsContent}
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
const ChallengeOverview = ({route}) => {
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

export default ChallengeOverview;
