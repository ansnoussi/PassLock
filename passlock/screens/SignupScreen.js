import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';
import { Input } from 'galio-framework'
import Firebase from 'firebase';


export default class SignupScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          email: "",
          password: "",
          passwordConfirm: "",
        };
      }  


  static navigationOptions = {
    header: null,
  };

  onSignupPress = () => {

    if(this.state.password !== this.state.passwordConfirm){
        Alert.alert("Passwords do not match");
        return;
    }

    Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() =>{

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
            <Input placeholder="Email" label="please enter your email:"  onChangeText={(text) => this.setState({email: text})}/>
            <Input placeholder="Password" label="enter your password"  password={true} viewPass={true}  onChangeText={(text) => this.setState({password: text})}/>
            <Input placeholder="Confirm Password" label="confirm your password"  password={true} viewPass={true} onChangeText={(text) => this.setState({passwordConfirm: text})}/>
            <Button title="Create Account" color="green" onPress={this.onSignupPress} ></Button>
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