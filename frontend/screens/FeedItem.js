import React, { useState } from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import Collapsible from 'react-native-collapsible';
import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';
import {Block, Button} from "galio-framework";
import PropTypes from 'prop-types';

function FeedItem({
    name,
    friends,
    description,
    favorit,
    privateChallenge,
    coopetition,
    setShowDetails,
    showDetails
}) {
  function renderFavoriteIcon() {
    if (!favorit) return null;
    return (
        <Ionicons name="ios-bookmark" size={26} color="black" style={{marginRight: 5}}/>
    );
  }

  function renderPrivateIcon() {
    if (!privateChallenge) return null;
    return (
        <Entypo name="mask" size={26} color="black" style={{marginRight: 5}} />
    );
  }

  function renderCoopetitionIcon() {
    if (!coopetition) return null;
    return (
        <Ionicons name="md-people" size={26} color="black" />
    );
  }

  function renderFriends(amount) {
    let tmp = [];
    if (amount <= 3) {
        for (let i = 0; i < amount; ++i) {
            tmp.push(
                <Octicons name="octoface" size={26} color="black" style={{marginRight: 5}}/>
            )
        }
    } else {
       tmp.push(<Octicons name="octoface" size={26} color="black" style={{marginRight: 5}}/>)
       tmp.push(<Octicons name="octoface" size={26} color="black" style={{marginRight: 5}}/>)
       tmp.push(<Text style={{fontSize: 24}}>...</Text>)
    }
    return tmp;
  }

    const [isCollapsed, setIsCollapsed] = useState(true);
    // console.log(test());

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.infopart}
                // onPress={() => setShowDetails(!showDetails)}
            >
                <View style={styles.imagepart}>
                    <ImageBackground
                        style={styles.backgroundimage}
                        source={require('../assets/images/challenges/challenge1.png') }
                    >
                        {renderFavoriteIcon()}
                        {renderPrivateIcon()}
                        {renderCoopetitionIcon()}
                    </ImageBackground>
                    <Text style={styles.imagetext}>{name}</Text>
                </View>


                <View style={{flexDirection: 'row', margin: 5}}>
                    <Image source={require('../assets/images/users/user0.png')} style={styles.descimage}/>
                    <Text style={styles.shortdesc}>{description}</Text>
                    <View style={{flexDirection: 'column'}}>
                        <Button round style={{width: 100, height: 20}} color="blue" >Join</Button>
                        <View style={{flexDirection: 'row'}}>
                            {renderFriends(friends)}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

FeedItem.defaultProps = {
    name: "default name",
    friends: 0,
    description: "default description",
    favorit: false,
    privateChallenge: false,
    coopetition: false
};

FeedItem.propTypes = {
    name: PropTypes.string,
    friends: PropTypes.integer,
    description: PropTypes.string,
    favorit: PropTypes.boolean,
    privateChallenge: PropTypes.boolean,
    coopetition: PropTypes.boolean
};


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
    },
    infopart: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    imagepart: {
        flex: 3,
        flexDirection: 'column'
    },
    backgroundimage: {
        width: '100%',
        height: 100,
        opacity: 0.5,
        flexDirection: 'row',
    },
    imagetext: {
        marginTop: -34,
        marginLeft: 8,
        fontSize: 24,
    },
    descimage: {
        flex: 1,
        height: 50,
        marginRight: 10
    },
    shortdesc: {
        flex: 6
    },
    descbutton: {
        flex: 3
    }
});

export default  FeedItem;
