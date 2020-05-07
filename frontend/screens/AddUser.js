import * as React from 'react';
import {Image, TouchableHighlight, View, StyleSheet} from "react-native";
import {Button, Icon, Text} from "galio-framework";
import Colors from "../constants/Colors";

const UserCard = (props) => {
    const [buttonPressed, setButtonPressed] = React.useState(false);

    return (
        <View style={{backgroundColor: Colors.backgroundColorLight}}>

            <View style={styles.ownerCard}>
                <TouchableHighlight onPress={() => {setButtonPressed(!buttonPressed)}} style={{width: "100%", height: "100%"}}>
                    <View
                        style={{flex: 1, flexDirection: "column", alignItems: "center", width: "100%", height: "100%"}}>
                        <View style={styles.headerFeedItem}>
                            <Image source={props.image} style={styles.ownerImageFeedItem}/>
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
                    </View>
                </TouchableHighlight>

            </View>
        </View>
    )
}


class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        fetch(`${this.props.baseUrl}/users/${this.props.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then((response) => response.json())
            .then((json) => JSON.parse(json))
            .then((json) => {
                this.setState({
                    "data": json["friends"].filter(friend => {
                        return this.props.participantNames.indexOf(friend["name"]) === -1;
                    }).map(friend => {
                        return [friend["name"], friend["id"]];
                    })
                });
            })
            .catch((error) => console.error(error))
    }

    render() {
        return (
            <View>
                <View style={{marginTop: 40}}>
                    <Text p bold color={Colors.textPrimary}>Whose asses do you want to kick?</Text>
                </View>

                {this.state.data.map((friend) => {
                    return <UserCard
                        key={friend[1]}
                        title={friend[0]}
                        image={{uri: `${this.props.baseUrl}/static/images/users/user${friend[1]}.png`}}
                        subtitle="Friend"
                    />
                })
                }

                <View style={{alignItems: "center", marginTop: 20}}>
                    <Button
                        onlyIcon
                        icon="check"
                        iconFamily="Entypo"
                        iconSize={30}
                        color={Colors.highlightColor}
                        iconColor={Colors.elementWhite}
                        style={{width: 100, height: 50}}
                        onPress={this.props.onPressAddUserFinished}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ownerCard: {
        marginTop: 20,
        flex: 1,
        padding: 0,
        height: 80,
        width: "100%",
        backgroundColor: Colors.backgroundColorLight,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    headerFeedItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
    },
    headerFeedItemText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    footerDivider: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: Colors.tabColor,
        borderBottomWidth: 2,
    },

})

export default AddUser;
