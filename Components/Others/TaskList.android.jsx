import React from 'react';
import {useHistory} from 'react-router-dom';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../Common/Header.android.jsx';

const TaskList = () => {
  const history = useHistory();

  return(
    <View>
      <Header isLoggedoff={false} isLoggedIn={false} isBackRequired={true}/>
      <View style={Styles.container} >
        <Text>{history.location.state.header}</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TaskList;
