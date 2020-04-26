import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text } from 'react-native';
import Nils from '../screens/Nils';
import Marius from '../screens/Marius';
import Malte from '../screens/Malte';
import Minhkha from '../screens/Minhkha';
import AnotherScreen from '../screens/AnotherScreen';

import { Ionicons, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'marius';

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
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
        component={Nils}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => 
            <MaterialIcons
              name="person"
              size={30}
              style={{ marginBottom: -3}}
              color={focused ? Colors.highlightColor : Colors.elementWhite}
            />
          ,
        }}
      />

      <BottomTab.Screen
        name="minhkha"
        component={Minhkha}
        options={{
          title: 'Friends',
          tabBarIcon: ({ focused }) => 
            <FontAwesome 
              name="group"
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.highlightColor : Colors.elementWhite}
            />
          ,
        }}
      />

      <BottomTab.Screen
        name="marius"
        component={Marius}
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused }) => 
            <Entypo
              name="menu"
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.highlightColor : Colors.elementWhite}
            />
          ,
        }}
      />

      <BottomTab.Screen
        name="challenges"
        component={AnotherScreen}
        options={{
          title: 'Challenges',
          tabBarIcon: ({ focused }) => 
            <MaterialCommunityIcons
            name="flag-checkered"
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.highlightColor : Colors.elementWhite}
            />
          ,
        }}
      />


      <BottomTab.Screen
        name="malte"
        component={Malte}
        options={{
          title: 'Notifications',
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
