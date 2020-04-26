import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text } from 'react-native';
import Profile from '../screens/Profile';
import Marius from '../screens/Marius';
import Malte from '../screens/Malte';
import Minhkha from '../screens/Minhkha';
import Friends from '../screens/Friends';
import AnotherScreen from '../screens/AnotherScreen';

import { Ionicons, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Image } from 'react-native';

import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'marius';

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

function ImageIcon({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: size, height: size, marginTop: 10}}>
      <Image
        source={require('../assets/images/Logo_only.png')}
        style={{width: 30, height: 30, marginTop: 10,}}
      />
    </View>
  );
}


export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route), 
                          headerTintColor: 'white', 
                          headerStyle:{backgroundColor: Colors.backgroundColorLight}});

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
        name="nils"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => 
            <MaterialIcons
              name="person"
              size={35}
              style={{ marginBottom: -15}}
              color={focused ? Colors.highlightColor : Colors.elementWhite}
            />
          ,
        }}
      />

      <BottomTab.Screen
        name="mfriends"
        component={Friends}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => 
            <FontAwesome 
              name="group"
              size={25}
              style={{ marginBottom: -17 }}
              color={focused ? Colors.highlightColor : Colors.elementWhite}
            />
          ,
        }}
      />

      <BottomTab.Screen
        name="marius"
        component={Marius}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => 
            // <Entypo
            //   name="menu"
            //   size={40}
            //   style={{ marginBottom: -20 }}
            //   color={focused ? Colors.highlightColor : Colors.elementWhite}
            // />
            <ImageIcon/>
          ,
        }}
      />

      <BottomTab.Screen
        name="challenges"
        component={AnotherScreen}
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
        name="malte"
        component={Malte}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => 
          <IconWithBadge 
          name="ios-notifications" 
          badgeCount={6} 
          color={focused ? Colors.highlightColor : Colors.elementWhite}
          size={30} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'nils':
      return '';
    case 'minhkha':
      return '';
    case 'marius':
      return '';
    case 'challenges':
      return '';
    case 'malte':
      return '';
    
  }
}
