import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import Firebase from 'firebase';
import { Card } from 'galio-framework'
import { _TESTING_ONLY_reset_container_count } from 'react-navigation/src/createNavigationContainer';



export default class PasswordsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = { data: [{website: "facebook" , password: "1234"} , {website: "google", password: "mypassword"}] };
  };



  static navigationOptions = {
    title: 'My Passwords',
  };
  
  getUserData = () => {
    let databaseRef = Firebase.database().ref('users/' + Firebase.auth().currentUser.uid);

    databaseRef.on('value', (snapshot) => {
      const newState = snapshot.val();
      let data = [];
      Object.entries(newState).map(([key,value]) => {
        data.push({password: key, website: value})
      });
      this.setState(data);
    });
  }

  componentDidMount() {
    this.getUserData();
  }
  

  render() {
    const listPasswords = this.state.data.map((data) => {
      return (
        <Card title={data.website} caption={data.password} style={styles.card} ></Card>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Text>Passwords for user {Firebase.auth().currentUser.uid}:</Text>
        <Card neutral  style={styles.card} title="hello1" caption="hello2"/>
        <Card neutral  style={styles.card} title="hello1" caption="hello2"/>
        {listPasswords}
        <Button title="refresh" onPress={this.getUserData}></Button>
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
