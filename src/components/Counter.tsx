import React, {type PropsWithChildren} from 'react';
import {View, Text, Button} from 'react-native';

const Counter: React.FC<
  PropsWithChildren<{
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
  }>
> = ({count, onIncrease, onDecrease, onIncreaseBy}) => {
  return (
    <View>
      <Text>{count}</Text>
      <Button title={'+1'} onPress={onIncrease} />
      <Button title={'-1'} onPress={onDecrease} />
      <Button title={'+5'} onPress={() => onIncreaseBy(5)} />
    </View>
  );
};
export default Counter;
