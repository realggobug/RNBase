import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu1Screen from '../screen/Menu1';
import Menu2Screen from '../screen/Menu2';

const Stack = createNativeStackNavigator();

const SceneNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu1" component={Menu1Screen} />
      <Stack.Screen name="Menu2" component={Menu2Screen} />
    </Stack.Navigator>
  );
};
export default SceneNavigator;
