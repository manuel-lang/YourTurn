import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Switch, Text } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { Button } from 'react-native-material-ui';
import FeedItem  from './FeedItem';
import Color from '../constants/Colors';

const images = {
    user0: require('../assets/images/users/user0.png'),
    user1: require('../assets/images/users/user1.png'),
    user2: require('../assets/images/users/user2.png'),
    user3: require('../assets/images/users/user3.png'),
    user4: require('../assets/images/users/user4.png'),
    user5: require('../assets/images/users/user5.png'),
    user6: require('../assets/images/users/user6.png'),
    user7: require('../assets/images/users/user7.png'),
    user8: require('../assets/images/users/user8.png'),
    user9: require('../assets/images/users/user9.png'),
    user10: require('../assets/images/users/user10.png'),
    user11: require('../assets/images/users/user11.png'),
    user12: require('../assets/images/users/user12.png'),
    user13: require('../assets/images/users/user13.png'),
    user14: require('../assets/images/users/user14.png'),
    user15: require('../assets/images/users/user15.png'),
    user16: require('../assets/images/users/user16.png'),
    user17: require('../assets/images/users/user17.png'),
    user18: require('../assets/images/users/user18.png'),
    challenge1: require('../assets/images/challenges/challenge1.png'),
    challenge2: require('../assets/images/challenges/challenge2.png'),
    challenge3: require('../assets/images/challenges/challenge3.png'),
    challenge4: require('../assets/images/challenges/challenge4.png'),
    challenge5: require('../assets/images/challenges/challenge5.png'),
    challenge6: require('../assets/images/challenges/challenge6.png'),
    challenge7: require('../assets/images/challenges/challenge7.png'),
    challenge8: require('../assets/images/challenges/challenge8.png'),
    challenge9: require('../assets/images/challenges/challenge9.png'),
    challenge10: require('../assets/images/challenges/challenge10.png'),
    challenge11: require('../assets/images/challenges/challenge11.png'),
    challenge12: require('../assets/images/challenges/challenge12.png'),
    challenge13: require('../assets/images/challenges/challenge13.png'),
    challenge14: require('../assets/images/challenges/challenge14.png'),
    challenge15: require('../assets/images/challenges/challenge15.png'),
    challenge16: require('../assets/images/challenges/challenge16.png'),
    challenge17: require('../assets/images/challenges/challenge17.png'),
    challenge18: require('../assets/images/challenges/challenge18.png'),
    challenge19: require('../assets/images/challenges/challenge19.png'),
    challenge20: require('../assets/images/challenges/challenge20.png'),
    challenge21: require('../assets/images/challenges/challenge21.png'),
    challenge22: require('../assets/images/challenges/challenge22.png'),
    challenge23: require('../assets/images/challenges/challenge23.png'),
    challenge24: require('../assets/images/challenges/challenge24.png'),
    challenge25: require('../assets/images/challenges/challenge25.png'),
}

let background = Color.backgroundColorLight; // backgrounddark Color.

const CustomButton = (props) => {
    const [isActive, setIsActive] = useState(false)

    const onPressCustomButton = () => {
        if (!isActive) {
            props.activeTags.push(props.tag)
        } else {
            let i;
            for (i = 0; i < props.activeTags.length; ++i) {
                if (props.activeTags[i] === props.tag) {
                    props.activeTags.splice(i, 1);
                }
            }
        }

        let url = 'http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges?user_id=1';
        let i;
        for (i = 0; i < props.activeTags.length; ++i) {
            url += "&tag=" + props.activeTags[i];
        }

        fetch(url, {
                        method: 'GET',
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        }),
                })
                .then((response) => response.json())
                .then((json) => props.func(JSON.parse(json)))
                .then(() => setIsActive(!isActive))
                .catch((error) => console.error(error))
    }

    let style_button_inactive = {container: {marginLeft: 10, borderRadius: 25, height: 30, backgroundColor: Color.backgroundColorLight},
                                 text:      {fontSize: 18, color: Color.textPrimary}};
    let style_button_active   = {container: {marginLeft: 10, borderRadius: 25, height: 40, backgroundColor: Color.highlightColor},
                                 text:      {fontSize: 18, color: Color.textPrimary}};
    return (
        <Button
            upperCase={false}
            text={props.tag}
            style={(isActive ? style_button_active : style_button_inactive)}
            onPress = {onPressCustomButton}
            onLongPress= {onPressCustomButton}
        />
    );
}

function Marius() {
    //const [text, setText] = React.useState('');
    const [fetchedData, setfetchedData] = useState([])
    const [activeTags, setActiveTags] = useState([])
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        let url = 'http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges?user_id=1';
        fetch('http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges?user_id=1',{
            method: 'GET',
            headers: new Headers({
                      'Content-Type': 'application/json'
                    }),
            })
            .then((response) => response.json())
            .then((json) => setfetchedData(JSON.parse(json)))
            .catch((error) => console.error(error))
    }, []);

    function friendIdToimage(friendsId) {
        let tmp = [];
        let i;
        for (i = 0; i < friendsId.length; ++i) {
            tmp.push(images["user"+friendsId[i]["id"]]);
        }
        return tmp;
    }

    function friendsIdToName(friendsId) {
        let tmp = [];
        let i;
        for (i = 0; i < friendsId.length; ++i) {
            tmp.push(friendsId[i]["name"]);
        }
        return tmp;
    }

    return (
        <View style={{flex: 1, backgroundColor: background}}>
            <View style={styles.wrapper}>
                <View style={styles.orderButtons}>
                    <ScrollView horizontal={true} style={styles.cb_scrollview} contentContainerStyle={{alignItems: 'center'}}>
                        <CustomButton tag="Health" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Sustainable" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Sport" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Creativity" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Location" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="International" func={setfetchedData} activeTags={activeTags} />
                    </ScrollView>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Text style={{color: Color.textPrimary, fontSize: 18, marginRight: 10}}>Local</Text>
                        <Switch
                            trackColor={{ false: Color.backgroundColorDark, true: Color.highlightColor }}
                            thumbColor={Color.elementWhite}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={{flex: 11, justifyContent: 'space-between'}}>
                    <FlatList
                        data={fetchedData}
                        renderItem={
                            ({item}) =>
                                <FeedItem
                                    ownerImage={images["user" + item.owner.id]}
                                    ownerName={item.owner.name}
                                    challengeImage={images["challenge" + item.challenge_id]}
                                    challengeTitle={item.name}
                                    friends={item.participants.length}
                                    friendsImages={friendIdToimage(item.participants)}
                                    friendsNames={friendsIdToName(item.participants)}
                                    likes={item.likes.length}
                                    comments={3}
                                    favorit={true}
                                    privateChallenge={item.private}
                                    coopetition={true}
                                    description={item.description}
                                    tags={item.tags}
                                    proof={item.proof}
                                    voting={item.voting}
                                    bet={item.bet}
                                    deadline={item.deadline}
                                />
                        }
                    />
                </View>
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
    },
    cb_scrollview: {
        paddingTop: 10,
        paddingBottom: 10,
        height: '100%',
    }
});

export default Marius;
