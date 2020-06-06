import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './Components/Others/Login.android.jsx';
import Register from './Components/Others/Register.android.jsx';

export default function App() {
  return (
    <View >
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="register" component={Register} title="Register" />
        </Scene>
      </Router>
    </View>
  );
}
