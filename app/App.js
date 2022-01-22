import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigations/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function Main() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
