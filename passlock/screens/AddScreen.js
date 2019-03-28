import React from 'react';
import { ScrollView, StyleSheet, Text, Button,Alert } from 'react-native';
import Firebase from 'firebase';
import { Input } from 'galio-framework'

export default class AddScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      website: "",
      password: "",
    }
  }

  static navigationOptions = {
    title: 'Add New Password',
  };


  writeUserData = () => {
    Firebase.database().ref('users/' + Firebase.auth().currentUser.uid).set(this.state);
  }

  handleSubmit = () => {
    Alert.alert("good")
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>enter your input:</Text>
        <Input placeholder="website" onChangeText={(text) => this.setState({website: text})} />
        <Input placeholder="password" onChangeText={(text) => this.setState({password: text})} />
        <Button title="submit" onPress={this.handleSubmit} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
