import React from 'react';
import { ScrollView, StyleSheet, Text, Button,Alert, View } from 'react-native';
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



  handleSubmit = () => {
    if(this.state.website == "" || this.state.password == ""){
      Alert.alert("feilds cannot be empty");
      return;
    }
    Firebase.database().ref('users/' + Firebase.auth().currentUser.uid).push({
      website : this.state.website,
      password: this.state.password,
    }).then(() => {
      Alert.alert("saved");
      this.setState({website: "", password: ""});
    } , (error) => {
      Alert.alert(error.message)
    });
    
  };

  generate = () => {
    this.setState({password: "some random stuff"});
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>enter your input:</Text>
        <Input placeholder="website" onChangeText={(text) => this.setState({website: text})} value={this.state.website} />
        <Input placeholder="password" onChangeText={(text) => this.setState({password: text})} value={this.state.password}  />
        <Button title="generate password"  onPress={this.generate}/>
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
