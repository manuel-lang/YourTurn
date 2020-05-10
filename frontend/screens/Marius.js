import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Switch, Text, LayoutAnimation, TouchableOpacity, Animated, Alert } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { Button } from 'react-native-material-ui';
import FeedItem  from './FeedItem';
import Colors from '../constants/Colors';
import ActionButton from 'react-native-action-button';
import {createStackNavigator} from "@react-navigation/stack";
import ChallengeOverview from './ChallengeOverview';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/Ionicons';

const CustomButton = (props) => {

    const onPressCustomButton = () => {
        let tmp = props.func_me_isActive; // workaround: old isActive state of the button, need in the fetch part
        let url = props.url;
        if (props.func_me_isActive) {
            props.func_me(false);
        } else {
            let c;
            for (c = 0; c < props.funcs.length; ++c) {
                props.funcs[c](false);
            }
            url += "&tag=" + props.tag;
        }
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then((response) => response.json())
            .then((json) => props.func(JSON.parse(json)))
            .then(() => {
                if (!tmp)
                    props.func_me(true)
            })
            .catch((error) => console.error(error))
    }

    let style_button_inactive = {
        container: {marginLeft: 10, borderRadius: 25, height: 30, backgroundColor: Colors.tabColor},
        text: {fontSize: 18, color: Colors.textPrimary}
    };
    let style_button_active = {
        container: {marginLeft: 10, borderRadius: 25, height: 40, backgroundColor: Colors.highlightColor},
        text: {fontSize: 18, color: Colors.textPrimary}
    };
    return (
        <Button
            upperCase={false}
            text={props.name}
            style={(props.func_me_isActive ? style_button_active : style_button_inactive)}
            onPress={onPressCustomButton}
            onLongPress={onPressCustomButton}
        />
    );
}

// Variable that stores current scroll y-position
let _listViewOffset = 0

function FeedScreen() {
    //const [text, setText] = React.useState('');
    const [fetchedData, setfetchedData] = useState([])
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)

    // const base_url = "http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080";
    const base_url = "http://127.0.0.1:8000"
    const user_id = 1;  // change to real value once we have multiple users
    const challenges_url = `${base_url}/challenges?user_id=${user_id}`
    console.log(challenges_url)
    const [isActionButtonVisible, setIsActionButtonVisible] = useState(true);

    {/*
    useEffect(() => {
        fetch(challenges_url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then((response) => response.json())
            .then((json) => console.log(JSON.parse(json)))
            .catch((error) => console.error(error))
    }, []);
    */}

    function friendObjectsToImageSources(friendObjects) {
        return friendObjects.map(function (friendObject) {
            return `${base_url}/static/images/users/user${friendObject["id"]}.png`;
        });
    }


    function friendObjectsToName(friendObjects) {
        return friendObjects.map(function (friendObject) {
            return friendObject["name"];
        });
    }

    const onScroll = (event) => {
        // Simple fade-in / fade-out animation
        const CustomLayoutLinear = {
          duration: 100,
          create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
          update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
          delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
        }

        // Check if the user is scrolling up or down by confronting the new scroll position with your own one
        const currentOffset = event.nativeEvent.contentOffset.y
        const direction = (currentOffset > 0 && currentOffset > _listViewOffset)
          ? 'down'
          : 'up'

        // If the user is scrolling down (and the action-button is still visible) hide it
        const isActionButtonVisibleTest = (direction === 'up')

        if (isActionButtonVisibleTest !== isActionButtonVisible) {
          LayoutAnimation.configureNext(CustomLayoutLinear)
          setIsActionButtonVisible(isActionButtonVisibleTest)
        }
        // Update your scroll position
        _listViewOffset = currentOffset
      }

    const actions = [
    {
        text: "Accessibility",
    //   icon: require("../images/ic_accessibility_white.png"),
        name: "bt_accessibility",
        position: 2
    },
    {
        text: "Language",
    //   icon: require("../images/ic_language_white.png"),
        name: "bt_language",
        position: 1
    },
    {
        text: "Location",
    //   icon: require("../images/ic_room_white.png"),
        name: "bt_room",
        position: 3
    },
    {
        text: "Video",
    //   icon: require("../images/ic_videocam_white.png"),
        name: "bt_videocam",
        position: 4
    }
    ];

    // TODO: remove, dirty workaround
    const challenges = [{
        'name': "Quarantine Family Pic",
        'owner': {
            'id': 1,
            'name': "Manuel"
        },
        'challenge_id': 1,
        'description': "Make a quarantine picture with your family",
        'private': false,
        'participants': [1, 2],
        'tags': ["#quarantinesquad"],
        'likes': [1, 2],
        'costs': 0,
        'completed_users': [1],
        'deadline': 1589104556,
        'proof': "image",
        'picture_id': 0,
        'bet': "bet bet bet",
        'voting': false,
    }]

    return (
        <View style={{flex: 1, backgroundColor: Colors.backgroundColorLight}}>
            <View style={styles.wrapper}>
                <View style={styles.orderButtons}>
                    <ScrollView horizontal={true} style={styles.cb_scrollview}
                                contentContainerStyle={{alignItems: 'center'}}>
                        <CustomButton name="Sport" tag="Sport" func={setfetchedData}
                                      funcs={[setIsActive2, setIsActive3, setIsActive4]} func_me={setIsActive1}
                                      func_me_isActive={isActive1} url={challenges_url}/>
                        <CustomButton name="Green" tag="Sustainability" func={setfetchedData}
                                      funcs={[setIsActive1, setIsActive3, setIsActive4]} func_me={setIsActive2}
                                      func_me_isActive={isActive2} url={challenges_url}/>
                        <CustomButton name="Social" tag="Social" func={setfetchedData}
                                      funcs={[setIsActive1, setIsActive2, setIsActive4]} func_me={setIsActive3}
                                      func_me_isActive={isActive3} url={challenges_url}/>
                        <CustomButton name="Creative" tag="Creative" func={setfetchedData}
                                      funcs={[setIsActive1, setIsActive2, setIsActive3]} func_me={setIsActive4}
                                      func_me_isActive={isActive4} url={challenges_url}/>
                    </ScrollView>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 10}}>
                        <Text style={{color: Colors.textPrimary, fontSize: 18, marginRight: 10}}>Nearby</Text>
                        <Switch
                            trackColor={{false: Colors.backgroundColorDark, true: Colors.highlightColor}}
                            thumbColor={Colors.elementWhite}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={{flex: 11, justifyContent: 'space-between'}}>
                    <ScrollView onScroll={onScroll}>
                        <FlatList
                            data={challenges}
                            renderItem={
                                ({item}) =>
                                    <FeedItem
                                        ownerImageURI={`${base_url}/static/images/users/user${item.owner.id}.png`}
                                        ownerName={item.owner.name}
                                        baseUrl={base_url}
                                        userId={user_id}
                                        challengeImageURI={`${base_url}/static/images/challenges/challenge${item.challenge_id}.png`}
                                        challengeTitle={item.name}
                                        participantImages={friendObjectsToImageSources(item.participants)}
                                        participantNames={friendObjectsToName(item.participants)}
                                        likes={item.likes.length}
                                        comments={item.comments}
                                        favorit={item.bookmarked}
                                        privateChallenge={item.private}
                                        coopetition={item.coopetition}
                                        description={item.description}
                                        tags={item.tags}
                                        proof={item.proof}
                                        voting={item.voting}
                                        bet={item.bet}
                                        deadline={item.deadline}
                                    />
                            }
                        />
                    </ScrollView>
                </View>

                {/* {isActionButtonVisible &&
                // <Animated.View>
                <ActionButton
                    buttonColor={Colors.highlightColor}
                    onPress={() => { console.log("hi")}}
                />
                // </Animated.View>
                }  */}

                <FloatingAction
                    actions={actions}
                    visible={isActionButtonVisible}
                    position="right"
                    color={Colors.highlightColor}
                    onPressItem={name => {
                        // Alert.alert("Icon pressed", `the icon ${name} was pressed`);
                        // setIsActionButtonVisible(!isActionButtonVisible)
                        console.log("Icon pressed", `the icon ${name} was pressed`)

                    }}
                    onPressMain={state => {
                        console.log(state);
                        setIsActionButtonVisible(!isActionButtonVisible);
                    }}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontFamily: 'Arial'
    },
    orderButtons: {
        flex: 2,
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20
    },
    cb_scrollview: {
        paddingTop: 10,
        paddingBottom: 10,
        height: '100%',
        flexDirection: 'row',
        paddingLeft: 10
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});


const FeedStack = createStackNavigator()

const Marius = () => {
    return (
        <FeedStack.Navigator initalRouteName="Feed">
            <FeedStack.Screen name="Feed" component={FeedScreen} />
            <FeedStack.Screen name="ChallengeOverview" component={ChallengeOverview} />
        </FeedStack.Navigator>
    )
}

export default Marius;
