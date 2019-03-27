import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add New Password',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>hello</Text>
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
