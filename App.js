import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NativeRouter, Route} from 'react-router-native';

import Login from './Components/Others/Login.android.jsx';
import Register from './Components/Others/Register.android.jsx';

export default function App() {
  return (
    <NativeRouter>
      <Route exact={true} path='/' component={Login} />
      <Route path='/register' component={Register} />
    </NativeRouter>
  );
}
