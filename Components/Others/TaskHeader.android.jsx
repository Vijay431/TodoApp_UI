import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

import Header from '../Common/Header.android.jsx';

const TaskHeader = props => {
  const [header, setHeader] = useState('');
  const [taskHeaderArray, setTaskHeaderArray] = useState([]);

  useEffect(() => {
    //get headers service
  }, [])

  const headerFunc = (text) => {
    setHeader(text);
  }
  const saveHeader = () => {
    if(header != ""){
      //post headers service
    }
  }

  return(
    <View >
      <Header isLoggedIn={true} />
      <View style={Styles.headerContainer} >
        <View style={Styles.header} >
          <Text style={Styles.text} >Add Task Heading</Text>
        </View>
        <View style={Styles.textContainer} >
          <View style={Styles.textField} >
            <TextInput style={Styles.textInput} value={header} onChangeText={(text) => headerFunc(text)} />
          </View>
          <View style={Styles.buttonContainer} >
            <Button title="Save" style={Styles.button} onPress={() => saveHeader()} />
          </View>
        </View>
      </View>
      <View style={Styles.taskContainer} >
        <View>

        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  headerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    marginVertical: 20,
    borderWidth: 1
  },
  header: {
    backgroundColor: '#1C86EE'
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    padding: 10
  },
  textField: {
    width: '80%'
  },
  textInput: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  buttonContainer: {
    width: '20%'
  },
  button: {}
})

export default TaskHeader;
