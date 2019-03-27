import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

export default class PasswordsScreen extends React.Component {
  static navigationOptions = {
    title: 'My Passwords',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Your passwords:</Text>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
