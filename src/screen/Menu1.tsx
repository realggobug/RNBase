import * as React from 'react';
import {Button, Text, View} from 'react-native';
import CounterContainer from '../containers/CounterContainer';

const Menu1Screen = (props: any) => {
  const {navigation} = props;
  return (
    <View>
      <Button
        title="Go to Menu2"
        onPress={() => navigation.navigate('Menu2')}
      />
      <Text>Menu1 Screen</Text>
      <CounterContainer />
    </View>
  );
};

export default Menu1Screen;
