import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { View, Text } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import OwnScreen from '../screens/OwnScreen';
import Nils from '../screens/Nils';
import Marius from '../screens/Marius';
import Malte from '../screens/Malte';
import Minhkha from '../screens/Minhkha';
import AnotherScreen from '../screens/AnotherScreen';

import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

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
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
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
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="nils"
        component={Nils}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => 
            <Ionicons
              name="md-home"
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ,
        }}
      />

      <BottomTab.Screen
        name="malte"
        component={Malte}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

      <BottomTab.Screen
        name="marius"
        component={Marius}
        options={{
          title: 'blabla',
          tabBarIcon: ({ focused }) => 
            <MaterialCommunityIcons
              name="dumbbell"
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ,
        }}
      />
 
      <BottomTab.Screen
        name="minhkha"
        component={Minhkha}
        options={{
          title: 'another screen',
          tabBarIcon: ({ focused }) => 
            <FontAwesome5 
              name="money-bill-alt"
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ,
        }}
      />


      <BottomTab.Screen
        name="notifications"
        component={AnotherScreen}
        options={{
          title: 'notifications',
          tabBarIcon: ({ focused }) => 
            <IconWithBadge 
              name="ios-notifications-outline" 
              badgeCount={3} 
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              size={30} />
          ,
        }}
      />     

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
