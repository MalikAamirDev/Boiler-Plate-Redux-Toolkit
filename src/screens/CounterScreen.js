import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';

const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>0</Text>
      <MyButton title="Add" onPress={() => {}} />
      <MyButton title="Minus" onPress={() => {}} />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    gap: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
