import * as React from 'react';
import HomeScreen from '../screen/Home';
import SceneNavigator from './SceneNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: '',
        }}
      />
      <Drawer.Screen
        name="Menus"
        component={SceneNavigator}
        options={{
          headerTitle: '',
        }}
      />
    </Drawer.Navigator>
  );
};
export default RootNavigator;
