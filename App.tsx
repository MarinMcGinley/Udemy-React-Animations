import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AbsolutePosition from './screens/absolutePosition';
import HomeScreen from './screens/homeScreen';
import Opacity from './screens/opacity';
import Scale from './screens/scale';
import Translate from './screens/translate';
import WidthAndHeight from './screens/withAndHeight';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Opacity' component={Opacity} />
        <Stack.Screen name='Translate' component={Translate} />
        <Stack.Screen name='Scale' component={Scale} />
        <Stack.Screen name='WidthAndHeight' component={WidthAndHeight} />
        <Stack.Screen name='AbsolutePosition' component={AbsolutePosition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
