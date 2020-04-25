import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { Button } from 'react-native-material-ui';
import FeedItem  from './FeedItem';
import Minhkha from './Minhkha';

let color_button_inactive = '#ababab';
let color_button_active = '#443f3c';
let background = '#2d2d2d';
let bc_button_active = '#ffc491';
let bc_button_inactive = background
let font = '#ebebeb'

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

    let style_button_inactive = {container: {marginLeft: 10, borderRadius: 25, height: 30, backgroundColor: bc_button_inactive},
                                 text:      {fontSize: 18, color: color_button_inactive}};
    let style_button_active   = {container: {marginLeft: 10, borderRadius: 25, height: 40, backgroundColor: bc_button_active},
                                 text:      {fontSize: 18, color: color_button_active}};
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
    }, []);



    return (
        <View style={{flex: 1, backgroundColor: background}}>
            {!showDetails &&
            <View style={styles.wrapper}>
                <View style={styles.orderButtons}>
                    {/*<FlatList
                        data={[
                            {key: "Health"},
                            {key: "Social"},
                            {key: "Lifestyle"}
                        ]}
                        horizontal={true}
                        renderItem={({ item }) => <CustomButton tag={item.key} func={setfetchedData} activeTags={activeTags} />}
                        keyExtractor={item => item.id}
                    />*/}
                    <ScrollView horizontal={true} style={styles.cb_scrollview} contentContainerStyle={{alignItems: 'center'}}>
                        <CustomButton tag="Health" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Sustainable" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Sport" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Creativity" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="Location" func={setfetchedData} activeTags={activeTags} />
                        <CustomButton tag="International" func={setfetchedData} activeTags={activeTags} />
                    </ScrollView>
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

            {showDetails && <Minhkha setShowDetails={setShowDetails} />}
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
        flex: 1.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cb_scrollview: {
        paddingTop: 10,
        paddingBottom: 10,
        height: '100%',
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
