import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login = props => {
  return(
    <View style={Styles.container} >
      <Text>Login works!</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login;
