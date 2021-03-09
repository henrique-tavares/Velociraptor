import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './pages/Details';
import Download from './pages/Download';
import Landing from './pages/Landing';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Landing">
        <Screen
          name="Landing"
          component={ Landing }
        />
        <Screen
          name="Download"
          component={ Download }
        />
        <Screen
          name="Details"
          component={ Details }
        />
      </Navigator>
    </NavigationContainer >
  );
}