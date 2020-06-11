import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../Common/Header.android.jsx';

const TaskList = () => {
  const history = useHistory();
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [taskCompleted, setTaskCompleted] = useState();

  useEffect(() => {}, [taskCompleted, taskList]);

  const taskInputHandler = (text) => {
    setTask(text);
  }

  const saveTasks = () => {
    if(task != ""){
      let body = {
        task: task,
        completed: false
      }
      setTaskList(prevState => [...prevState, body]);
      setTask('');
    }
    else{
      Alert.alert('Failure', 'Empty task is not allowed to save!', [{text: 'Okay'}]);
    }
  }

  const completeTask = (task, index) => {
    taskList[index].completed = true;
    setTaskList(taskList);
  }

  const removeTask = (index) => {
    taskList.splice(index, 1);
    setTaskList(taskList);
  }

  return(
    <View>
      <Header isLoggedoff={false} isLoggedIn={false} isBackRequired={true}/>
      <View style={Styles.container} >
        <View style={Styles.headerContainer} >
          <Text style={Styles.header} >{history.location.state.header}</Text>
        </View>
        <View style={Styles.textFieldContainer} >
          <View style={Styles.textField}>
            <TextInput style={Styles.textInput} value={task} onChangeText={(text) => taskInputHandler(text)} />
          </View>
          <View style={Styles.buttonContainer}>
            <Button style={Styles.button} title="Save" onPress={() => saveTasks()} />
          </View>
        </View>
        <View style={Styles.bodyContainer} >
          {
            taskList.map((task, index) => {
              return <View key={index} style={Styles.tasks} >
                <View style={Styles.taskContainer} >
                {
                  task.completed ? <Text style={Styles.completedTask} >{task.task}</Text> : <Text style={Styles.task} >{task.task}</Text>
                }
                </View>
                <View style={Styles.completeTask} >
                  <Icon name="check" size={25} onPress={() => completeTask(task, index)} />
                </View>
                <View style={Styles.removeTask} >
                  <Icon name="close" size={25} onPress={() => removeTask(index)} />
                </View>
              </View>
            })
          }
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%'
  },
  headerContainer: {
    backgroundColor: '#1C86EE',
    padding: 5
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  textFieldContainer: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1
  },
  textField: {
    width: '80%'
  },
  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: 40
  },
  buttonContainer: {
    width: '20%'
  },
  button: {},
  bodyContainer: {
    marginVertical: 15
  },
  tasks: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    marginVertical: 5
  },
  taskContainer: {
    width: '80%'
  },
  completedTask: {
    textDecorationLine: 'line-through',
    fontSize: 17.5
  },
  task: {
    fontSize: 17.5,
    textDecorationLine: 'none'
  },
  completeTask: {
    width: '12.5%',
  },
  removeTask: {
    width: '10%'
  }
})

export default TaskList;
