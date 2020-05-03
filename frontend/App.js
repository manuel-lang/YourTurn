import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import Colors from "./constants/Colors"

console.disableYellowBox = true;

const Splash = (props) => {
  return (
      <View style={styles.splash} >
        <TouchableHighlight onPress={props.onPressSplash}>
        <Image
          source={require('./assets/images/Logo_spot.png')}
          style={{width: 300, height: 120}}
        />
        </TouchableHighlight>
      </View>
  )
}

export default function App(props) {
  const [loadApp, setLoadApp] = React.useState(false);
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  const onPressSplash = () => {
    setLoadApp(true);
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      !loadApp ? <Splash onPressSplash={onPressSplash} /> : <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          {/*<Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>*/}
          <BottomTabNavigator />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  splash: {
    backgroundColor: Colors.backgroundColorLight,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
});
