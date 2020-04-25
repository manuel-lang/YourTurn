import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { Card, Button, Icon } from 'galio-framework';
import FeedItem  from './FeedItem';
import { Ionicons } from '@expo/vector-icons';

export default function Marius() {
    //const [text, setText] = React.useState('');
    const [fetchedData, setfetchedData] = useState([])

    useEffect(() => {
        fetch('http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges?user_id=1')
            .then((response) => response.json())
            .then((json) =>
                setfetchedData(JSON.parse(json))
            )
          .catch((error) => console.error(error))
          // .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.wrapper}>
            <Text style={{flex: 1, color: '#000000', textAlign: 'center', fontSize: 20}}>Challenges Feed</Text>
            <TextInput
                style={{flex: 1, color: '#000000', marginBottom: 10}}
                placeholder="click here to search your feed!"
                clearButtonMode="always"
                //defaultValue={text}
                //onChangeText={text => setText(text)}
            />
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
                            />
                    }
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
        backgroundColor: '#242424',
    },
    feedlist: {
    }
});
/*
function test() {
    const test_uri = 'http://ec2-3-122-224-7.eu-central-1.compute.amazonaws.com:8080/challenges?user_id=1'
    const blubb = fetch(test_uri, {
    method: 'GET',
    headers: new Headers({
              'Authorization': "Bearer " + localStorage.access_token,
              'Content-Type': 'application/json'
            }),
    //body: JSON.stringify(convertedState)
  })
    .then(res => res.json())
    .then(
      result => {
        // Check for timeout property --> if yes then session expired
        if (!result.hasOwnProperty("msg")) {
          // Execute callback function which sets the parameters from the result file
          if (result !== null) {
            return result;
          } else {
            return defaultResult;
          }
        } else {
          // Session timed out --> Login again
          history.push("/out/true");
        }
          return result;
      },
      (error) => {
        console.log(error);
      }
    )
    return blubb;
}
 */
