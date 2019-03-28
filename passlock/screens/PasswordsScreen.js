import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Firebase from 'firebase';
import { Card } from 'galio-framework'



export default class PasswordsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      passwords: []
    }
  };



  static navigationOptions = {
    title: 'My Passwords',
  };
  
  getUserData = () => {
    let userId = Firebase.auth().currentUser.uid;
    let ref = Firebase.database().ref('users/' + userId);
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  }

  componentDidMount() {
    this.getUserData();
  }
  

  render() {
    const { passwords } = this.state;
    const listPasswords = passwords.map( password => <Card neutral  style={styles.card} title={password.website} aption="click to copy the password" />)
    return (
      <ScrollView style={styles.container}>
        <Text>Passwords for user {Firebase.auth().currentUser.uid}:</Text>
        <Card neutral  style={styles.card} title="hello1" caption="hello2"/>
        <Card neutral  style={styles.card} title="hello1" caption="hello2"/>
        {listPasswords}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 5,
  }
});
