import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';

import Header from '../Common/Header.android.jsx';
import Environment from '../Common/environment.android.jsx';

const Register = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const history = useHistory();

  const registerFunc = () => {
    if(username != "" && password != "" && repassword != ""){
      if(password != "" && repassword != ""){
        fetch(Environment.register, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username: username,
              password: password
          })
        })
        .then(res => res.json())
        .then(json => {
          if(json.message === 'success'){
            Alert.alert('Success', 'User Registered Successfully!', [{text: 'Okay', onPress: () => history.push('/')}]);
          }
          else{
            Alert.alert('Failure', 'Please try again later!', [{text: 'Okay'}]);
          }
        })
        .catch(err => Alert.alert('Failure', 'Uh-Oh! Something went Wrong!', [{text: 'Okay'}]))
      }
      else{
        Alert.alert('Failure', 'Passwords aren\'t matching', [{text: 'Okay'}]);
      }
    }
    else{
      Alert.alert('Failure', 'All fields are mandatory!', [{text: 'Okay'}]);
    }
  };

  const usernameField = (text) => {setUsername(text)}
  const passwordField = (text) => {setPassword(text)}
  const repasswordField = (text) => {setRepassword(text)}

  return(
    <View>
      <Header isLoggedoff={true} isLoggedIn={false} isBackRequired={false} />
      <View style={Styles.container} >
        <View style={Styles.header} >
          <Text style={Styles.headerText} >Register</Text>
        </View>
        <View style={Styles.bodyContainer} >
          <Text style={Styles.bodyText} >Username</Text>
          <TextInput style={Styles.bodyTextInput} value={username} onChangeText={(text) => usernameField(text)} />
        </View>
        <View style={Styles.bodyContainer} >
          <Text style={Styles.bodyText} >Password</Text>
          <TextInput style={Styles.bodyTextInput} secureTextEntry={true} value={password} onChangeText={(text) => passwordField(text)} />
        </View>
        <View style={Styles.bodyContainer} >
          <Text style={Styles.bodyText} >Re-type Password</Text>
          <TextInput style={Styles.bodyTextInput} secureTextEntry={true} value={repassword} onChangeText={(text) => repasswordField(text)} />
        </View>
        <View style={Styles.buttonContainer} >
          <View style={Styles.button} >
            <Button title="Submit" color="#5cb85c" onPress={() => registerFunc()}/>
          </View>
          <View style={Styles.button}>
            <Button title="Cancel" color="red" onPress={() => history.push('/')} />
          </View>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%',
    borderWidth: 1,
    marginVertical: 50,
    borderRadius: 10
  },
  header: {
    backgroundColor: '#1C86EE',
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  bodyContainer: {
    padding: 10
  },
  bodyText: {
    fontWeight: 'bold'
  },
  bodyTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    height: 40
  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: '35%',
  }
})

export default Register;
