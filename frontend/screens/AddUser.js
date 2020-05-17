import * as React from 'react';
import {Image, TouchableHighlight, View, StyleSheet, ScrollView} from "react-native";
import {Button, Icon, Text} from "galio-framework";
import Colors from "../constants/Colors";

const UserCard = (props) => {
    const [buttonPressed, setButtonPressed] = React.useState(false);

    return (
        <TouchableHighlight onPress={() => {setButtonPressed(!buttonPressed)}} style={{width: "100%"}}>
                <View style={styles.headerFeedItem}>
                    <Image source={props.image.uri} style={{width: 80, height: 80}}/>
                    <View style={styles.headerFeedItemText}>
                        <Text color={Colors.textPrimary} bold h5 style={{marginTop: 50}}>{props.title}</Text>
                        <Text color={Colors.textSecondary} p>Friend</Text>
                    </View>

                    {buttonPressed && <Icon
                        name="check"
                        family="Feather"
                        color={Colors.highlightColor}
                        size={30}
                        style={styles.statsIcon}
                    />}
                </View>
        </TouchableHighlight>
    )
}


class AddUser extends React.Component {

    constructor(props) {
        super(props);
        this.params = this.props.route.params
        this.state = {data: []};
    }

    componentDidMount() {
        fetch(`${this.params.baseUrl}/users/${this.params.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then((response) => response.json())
            .then((json) => JSON.parse(json))
            .then((json) => {
                this.setState({
                    "data": json["friends_ids"].filter(friend => {
                        return this.params.participantNames.indexOf(friend["name"]) === -1;
                    }).map(friend => {
                        return [friend["name"], friend["id"]];
                    })
                });
            })
            .catch((error) => console.error(error))
    }

    render() {

        return (
            <View style={{backgroundColor: Colors.backgroundColorLight, flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <View style={{marginTop: 20, marginBottom: 20}}>
                    <Text p bold color={Colors.textPrimary}>Whose asses do you want to kick?</Text>
                </View>

                <ScrollView style={{marginBottom: 20}}>
                    {this.state.data.map((friend) => {
                            return <UserCard
                                key={friend[1]}
                                title={friend[0]}
                                image={{uri: `${this.params.baseUrl}/static/images/users/user${friend[1]}.png`}}
                                subtitle="Friend"
                            />
                        })
                    }
                </ScrollView>

                <View style={{alignItems: "center", marginBottom: 20}}>
                    <Button
                        onlyIcon
                        icon="check"
                        iconFamily="Entypo"
                        iconSize={30}
                        color={Colors.highlightColor}
                        iconColor={Colors.elementWhite}
                        style={{width: 100, height: 50}}
                        onPress={() => {
                            this.props.route.params.test()
                            this.props.navigation.goBack()
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ownerCard: {
        padding: 0,
        width: "100%",
        // borderRadius: 10,
    },
    headerFeedItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    headerFeedItemText: {
        flexDirection: 'column',
        justifyContent: 'center',

    },
})

export default AddUser;
