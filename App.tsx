/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigator/RootNavigator';
import rootReducer from './src/modules/index';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: rootReducer});

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
