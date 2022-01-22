import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

import GitHubListScreen from '../screens/GitHubList.js';
import GitHubDetailScreen from '../screens/GitHubDetail.js';

const Top = createStackNavigator();
const TopStack = () => {
  return (
    <Top.Navigator
      initialRouteName="MainFeed"
      screenOptions={() => ({
        ...TransitionPresets.FadeFromBottomAndroid,
      })}>
      <Top.Screen name="MainFeed" component={GitHubListScreen} />
      <Top.Screen name="GitHubDetail" component={GitHubDetailScreen} />
    </Top.Navigator>
  );
};

// Manifest of possible screens
const Root = createStackNavigator();
const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'black',
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
      initialRouteName="TopStack">
      <Root.Screen name="TopStack" component={TopStack} />
    </Root.Navigator>
  );
};

const AppNavigator = () => {
  return <RootNavigator />;
};

export {RootNavigator, AppNavigator};
