import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {View, Text, StyleSheet} from 'react-native';
import { Header as Title, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isLoggedoff, setIsLoggedoff] = useState();
  const [isBackRequired, setIsBackRequired] = useState();
  const history = useHistory();

  useEffect(() => {
    setIsLoggedIn(props.isLoggedIn);
    setIsBackRequired(props.isBackRequired);
    setIsLoggedoff(props.isLoggedoff);
  }, [props.isLoggedIn, props.isBackRequired, props.isLoggedoff]);

  const logoutUser = () => {
    history.push('/');
  }

  const goBack = () => {
    history.goBack();
  }

  return(
    <View>
      {
        isLoggedoff ? <View>
          <View style={Styles.titleContainerBeforeLogin} >
            <Title
            placement="left"
            leftComponent = {{text: 'TodoApp', style: Styles.titleBeforeLogin}}
            />
          </View>
        </View> : null
      }
      {
        isLoggedIn ? <View style={Styles.titleContainerAfterLogin} >
          <Title
          placement="left"
          leftComponent = {{text: 'TodoApp', style: Styles.titleAfterLogin}}
          rightComponent = {<Button icon={<Icon name="sign-out" size={20} color="white"/>} onPress={() => logoutUser()} />}
          />
        </View> : null
      }
      {
        isBackRequired ? <View>
          <View style={Styles.titleAtTaskListContainer} >
            <Title
              leftComponent = {<Button title="Back" icon={<Icon name="chevron-left" size={14} color="white"/>} onPress={() => goBack()} />}
              centerComponent = {{text: 'TodoApp', style: Styles.titleAtTaskList}}
              rightComponent= {<Button icon={<Icon name="sign-out" size={20} color="white"/>} onPress={() => logoutUser()} />}
            />
          </View>
        </View> : null
      }
    </View>
  )
}
export default Header;

const Styles = StyleSheet.create({
  titleContainerBeforeLogin: {
    marginTop: '-10%',
    paddingTop: 10,
    paddingBottom: 5
  },
  titleBeforeLogin: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleContainerAfterLogin: {
    marginTop: '-10%',
    paddingTop: 10,
    paddingBottom: 5
  },
  titleAfterLogin: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleAtTaskListContainer: {
    marginTop: '-10%',
    paddingTop: 10,
    paddingBottom: 5
  },
  titleAtTaskList: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
