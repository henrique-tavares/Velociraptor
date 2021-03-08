import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './pages/Details';
import Download from './pages/Download';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
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