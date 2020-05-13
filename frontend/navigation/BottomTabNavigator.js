import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text } from 'react-native';
import Profile from '../screens/Profile';
import FeedNavigation from './FeedNavigation';
import Notifications from '../screens/Notifications';
import { Ionicons, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import Colors from '../constants/Colors';
import EmptyScreen from "../screens/EmptyScreen";


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Feed';

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5, marginTop: 15}}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -1,
            backgroundColor: Colors.elementRed,
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 9, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function ImageIcon(props) {
  return (
    <View style={{ width: props.size, height: props.size, marginTop: -5}}>
      <Image
        source={props.focused ? require('../assets/images/Logo_only.png') : require('../assets/images/Logo_only_white.png')}
        style={{width: 30, height: 30, marginTop: 10,}}
      />
    </View>
  );
}


function BottomTabNavigator({ navigation, route }) {

    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                activeBackgroundColor: Colors.backgroundColorLight,
                inactiveBackgroundColor: Colors.backgroundColorLight,
                activeTintColor: Colors.highlightColor,
                inactiveTintColor: Colors.textPrimary,
            }}
        >
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) =>
                        <MaterialIcons
                            name="person"
                            size={35}
                            style={{ marginBottom: -15}}
                            color={focused ? Colors.highlightColor : Colors.elementWhite}
                        />,
                }}
            />

            <BottomTab.Screen
                name="Friends"
                component={EmptyScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) =>
                        <FontAwesome
                          name="group"
                          size={25}
                          style={{ marginBottom: -17 }}
                          color={focused ? Colors.highlightColor : Colors.elementWhite}
                        />,
                }}
            />

            <BottomTab.Screen
                name="Feed"
                component={FeedNavigation}
                options={{
                    title: '',
                    tabBarIcon: ({focused}) =>
                        <ImageIcon
                            focused={focused}
                            size={25}
                        />,
                }}
            />

            <BottomTab.Screen
                name="challenges"
                component={EmptyScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) =>
                        <MaterialCommunityIcons
                            name="flag-checkered"
                            size={30}
                            style={{ marginBottom: -20 }}
                            color={focused ? Colors.highlightColor : Colors.elementWhite}
                        />
                    ,
                }}
            />


            <BottomTab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) =>
                        <IconWithBadge
                            name="ios-notifications"
                            badgeCount={6}
                            color={focused ? Colors.highlightColor : Colors.elementWhite}
                            size={30}
                        />,
                }}
            />

    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
