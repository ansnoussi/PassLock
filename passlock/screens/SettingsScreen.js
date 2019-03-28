import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import Firebase from 'firebase';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  onSignOutPress = () =>{
    Firebase.auth().signOut();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>good bye :) </Text>
        <Button title="Sign out" onPress={this.onSignOutPress} ></Button>
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
