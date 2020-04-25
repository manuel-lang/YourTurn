import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { Button } from 'galio-framework';
import {Button as B} from 'react-native';
import FeedItem  from './FeedItem';
import Minhkha from './Minhkha';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";

const CustomButton = (props) => {
    const [isActive, setIsActive] = useState(false)

    const onPressCustomButton = () => {
        // activeTagsFunc
        // activeTags


        let url = 'http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges?user_id=1';
        url += "&tag=" + props.tag;
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
                  // .finally(() => setLoading(false));
    }

    return (
        <Button
            style={{flex: 1, margin: 5, }}
            onPress = {onPressCustomButton}
            color={isActive ? 'red' : 'orange'}
        >
            {props.tag}
        </Button>
    );
}

function Marius() {
    //const [text, setText] = React.useState('');
    const [fetchedData, setfetchedData] = useState([])
    const [activeTags, setActiveTags] = useState([])
    const [showDetails, setShowDetails] = useState(false)

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
          // .finally(() => setLoading(false));
    }, []);


    // here <Minhkha display=true /> mit einbauen
    return (
        <View style={{flex: 1}}>
            {!showDetails &&
            <View style={styles.wrapper}>
                {/* <Text style={{flex: 1, color: '#000000', textAlign: 'center', fontSize: 20}}>Challenges Feed</Text>*/}
                <View style={styles.orderButtons}>
                    <CustomButton tag="Health" func={setfetchedData} activeTags={activeTags} activeTagsFunc={setActiveTags}/>
                    <CustomButton tag="Social" func={setfetchedData} activeTags={activeTags}/>
                    <CustomButton tag="Lifestyle" func={setfetchedData} activeTags={activeTags}/>
                </View>
                <View style={{flex: 11, justifyContent: 'space-between'}}>
                    <FlatList
                        data={fetchedData}
                        renderItem={
                            ({item}) =>
                                <FeedItem
                                    name={item.name}
                                    friends={item.participants.length}
                                    description={item.description}
                                    coopetition={true}
                                    privateChallenge={item.private}
                                    favorit={true}
                                    setShowDetails={setShowDetails}
                                    showDetails={showDetails}
                                />
                        }
                    />
                </View>
            </View>
            }

            {showDetails && <Minhkha />}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    orderButtons: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Marius;
/*<TextInput
                style={{flex: 1, color: '#000000', marginBottom: 10}}
                placeholder="click here to search your feed!"
                clearButtonMode="always"
                //defaultValue={text}
                //onChangeText={text => setText(text)}
            />*/
