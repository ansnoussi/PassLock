import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert,
} from 'react-native';
import { Input } from 'galio-framework'
import Firebase from 'firebase';


export default class ForgotPasswordScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          email: "",
        };
      }

  static navigationOptions = {
    header: null,
  };

  onSendPress = () =>{
    Firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(()=>{
        Alert.alert("password reset email has been sent");
    }, (error) => {
        Alert.alert(error.message);
    });
  }

  render() {
    return (
      <View style={styles.container}>
            <View style={styles.goBack} >
            <Button title="back" color="green" onPress={() =>this.props.navigation.navigate('Login')}></Button>
            </View>
            <Input placeholder="Email" label="enter your email:" onChangeText={(text) => this.setState({email: text})} />
            <Button title="reset password" color="green" onPress={this.onSendPress} ></Button>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#72ff7e',
    },
    goBack: {
        flex: 0.2,
    }
});