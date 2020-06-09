import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {View, Text, TextInput, Button, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Button as ReactButton} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'react-router-native';

import Header from '../Common/Header.android.jsx';
import TaskList from './TaskList.android.jsx';

var SOURCE_DATA = [];

const TaskHeader = props => {
  const [header, setHeader] = useState('');
  const [taskHeaderArray, setTaskHeaderArray] = useState([]);
  const history = useHistory();

  useEffect(() => {
    //get headers service
  }, [taskHeaderArray])

  const headerFunc = (text) => {
    setHeader(text);
  }
  const saveHeader = () => {
    if(header != ""){
      //post headers service
      let body = {
        header: header,
        id: Date.now().toString()
      }
      setTaskHeaderArray(prevState => [...prevState, body]);
      setHeader('');
    }
  }
  const deleteHeading = (heading, index) => {
    taskHeaderArray.splice(index, 1);
    setTaskHeaderArray(taskHeaderArray);
  }

  const redirectTo = (taskHeading) => {
    history.push({pathname: '/tasklist', state: taskHeading});
  }

  return(
    <View>
      <Header isLoggedoff={false} isLoggedIn={true} isBackRequired={false}/>
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

      <View style={Styles.taskHeaderContainer} >
        <ScrollView style={Styles.scrollableView} >
        {
        taskHeaderArray.map((taskHeading, index) => {
          return  <View key={index} style={Styles.container} >
            <View style={Styles.taskHeader}>
              <View style={Styles.deleteButton} >
                <ReactButton icon={<Icon name="trash" size={20} color="white" />} onPress={() => deleteHeading(taskHeading.header, index)} />
              </View>
              <View style={Styles.heading} >
                <Text>{taskHeading.header}</Text>
              </View>
              <View style={Styles.redirectTo} >
                <Icon name="chevron-right" size={35} color="gray" onPress={() => redirectTo(taskHeading)} />
              </View>
            </View>
          </View>
          })
        }
        </ScrollView>
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
  button: {},
  taskHeaderContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%'
  },
  scrollableView: {
    height: '72.5%'
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10
  },
  taskHeader: {
    flexDirection: 'row-reverse',
    borderWidth: 1
  },
  deleteButton: {
    width: '10%'
  },
  heading: {
    width: '80%',
    padding: 5
  },
  redirectTo: {
    width: '10%',
    paddingTop: 2
  }
})

export default TaskHeader;
