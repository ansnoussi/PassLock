import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Asset } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import ApiKeys from './constants/ApiKeys.js';
import Firebase from 'firebase';
import MainTabNavigator from './navigation/MainTabNavigator';

console.disableYellowBox = true;

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    if(!Firebase.apps.length){Firebase.initializeApp(ApiKeys.FirebaseConfig);}
    Firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
    if ((!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
          if(!this.state.isAuthenticated){
            return (
              <View style={styles.container}>
                <AppNavigator />
              </View>
            );
          }
           else{
            return (
              <View style={styles.container}>
                <MainTabNavigator />
              </View>
            );
          }
  }
}

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/logo.png'),
      ]),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
