import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Clipboard,
  Alert,
  TouchableHighlight
} from 'react-native';
import Firebase from 'firebase';
import { Card, Block } from 'galio-framework'
import { _TESTING_ONLY_reset_container_count } from 'react-navigation/src/createNavigationContainer';



export default class PasswordsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = { data: [] };
  };



  static navigationOptions = {
    title: 'My Passwords',
  };
  
  getUserData = () => {
    let databaseRef = Firebase.database().ref('users/' + Firebase.auth().currentUser.uid);

    databaseRef.on('value', (snapshot) => {
      let newState = snapshot.val();
      let data = Object.values(newState);
      this.setState({ data });
      
    });
  }

  componentDidMount() {
    this.getUserData();
  }
  

  render() {
    const listPasswords = this.state.data.map((data) => {
      return (
        <TouchableHighlight underlayColor="#96e6ff" onPress={() => {
          Clipboard.setString(data.password);
          Alert.alert("password for " + data.website +" copied to your clipboard");
        }} >
        <Card title={data.website} style={styles.card} ></Card>
        </TouchableHighlight>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Text>Passwords for user {Firebase.auth().currentUser.uid}:</Text>
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
