import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../components/MyButton';

const Login = () => {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // functions
  const handlingLogin = () => {
    const params = {
      username: '',
      password: '',
    };
    console.log('params:', params);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        placeholder="Enter Email"
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        placeholder="Enter Password"
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="grey"
      />
      <MyButton title="Login" onPress={handlingLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 150,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'coral',
    paddingHorizontal: 20,
  },
});
