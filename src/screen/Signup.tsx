import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

interface Props {
  onSignup: (username: string, email: string, password: string) => void;
}

const SignupForm: React.FC<Props> = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
    <ScrollView style={styles.container_1} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={[styles.input, styles.inputWithBorder]}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={[styles.input, styles.inputWithBorder]}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={[styles.input, styles.inputWithBorder]}
      />
      <View style={styles.button_view}>
      <Text style={styles.button_text} onPress={() => onSignup(username, email, password)}>Sign Up</Text>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'

  },
  container_1:{
    flex:1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    alignSelf:"center"
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    marginHorizontal:5,
    fontSize:14
  },
  inputWithBorder: {
    borderRadius: 5,
  },
  button_view:{
    width:'30%',
    marginTop:10,
    backgroundColor: '#F04438',
    alignSelf:'center',
    borderRadius:7
  },
  button_text: {
    fontSize:24,
    paddingVertical:7,
    alignSelf:'center',
    color:"#fff",
    fontWeight:'700'
  },
});

export default SignupForm;