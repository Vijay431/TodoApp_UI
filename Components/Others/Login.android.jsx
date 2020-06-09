import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {View, Text, TextInput, Button, Alert, AsyncStorage, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import base64 from 'react-native-base64'

import Header from '../Common/Header.android.jsx';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const loginFunc = () => {
    if(username != "" && password != ""){
      let token = base64.encode(username + ':' + password);
      AsyncStorage.setItem('Auth-Token', token);
      // AsyncStorage.getItem('Auth-Token').then(token => console.log(base64.decode(token)));
      history.push('/taskheader');
    }
    else{
      Alert.alert('Failure', 'All fields are mandatory', [{text: 'Okay'}])
    }
  }

  const usernameField = (text) => {setUsername(text)}
  const passwordField = (text) => {setPassword(text)}

  return(
    <View>
      <Header/>
      <View style={Styles.container} >
        <View style={Styles.header} >
          <Text style={Styles.headerText} >Login</Text>
        </View>
        <View style={Styles.bodyContainer} >
          <Text style={Styles.bodyText} >Username</Text>
          <TextInput style={Styles.bodyTextInput} value={username} onChangeText={(text) => usernameField(text)} />
        </View>
        <View style={Styles.bodyContainer} >
          <Text style={Styles.bodyText} >Password</Text>
          <TextInput style={Styles.bodyTextInput} secureTextEntry={true} value={password} onChangeText={(text) => passwordField(text)} />
        </View>
        <View style={Styles.buttonContainer} >
          <Button title="Sign in" color="#5cb85c" onPress={() => loginFunc()}/>
        </View>
        <View style={Styles.redirectLink} >
          <Link to="/register" ><Text style={Styles.redirectLinkText} >Are you a new user? Click here!</Text></Link>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    borderWidth: 1,
    width: '70%',
    marginLeft: '15%',
    marginRight: '15%',
    borderRadius: 10
  },
  header: {
    padding: 10,
    backgroundColor: '#1C86EE',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  bodyContainer: {
    padding: 10
  },
  bodyText: {
    fontWeight: 'bold'
  },
  bodyTextInput:{
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    height: 40
  },
  buttonContainer: {
    padding: 10
  },
  redirectLink: {
    paddingBottom: 10
  },
  redirectLinkText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 12.5
  }
})

export default Login;
