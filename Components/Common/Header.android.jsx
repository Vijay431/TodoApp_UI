import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {View, Text, StyleSheet} from 'react-native';
import { Header as Title, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const history = useHistory();

  useEffect(() => {
    setIsLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn]);

  const logoutUser = () => {
    history.push('/');
  }

  return(
    <View>
      {
        !isLoggedIn ? <View>
          <View style={Styles.titleContainerBeforeLogin} >
            <Title
            placement="left"
            leftComponent = {{text: 'TodoApp', style: Styles.titleBeforeLogin}}
            />
          </View>
        </View> : <View style={Styles.titleContainerAfterLogin} >
          <Title
          placement="left"
          leftComponent = {{text: 'TodoApp', style: Styles.titleAfterLogin}}
          rightComponent = {<Button icon={<Icon name="sign-out" size={20} color="white"/>} onPress={logoutUser} />}
          />
        </View>
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
  }
})
