import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  Alert
} from 'react-native';
import { Input } from 'galio-framework'
import Firebase from 'firebase';



export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  static navigationOptions = {
    header: null,
  };

  onLoginPress = () => {
    Firebase.auth().signInWithEmailAndPassword(this.state.email , this.state.password)
    .then(() => {

    }, (error)=>{
      Alert.alert(error.message);
    });
  }

  render() {
    return (
      <View style={styles.container}>
            <Image
              source={
                require('../assets/images/logo.png')
              }
            />
            <Input placeholder="Email" onChangeText={(text) => this.setState({email: text})} />
            <Input placeholder="Password"  password={true} viewPass={true} onChangeText={(text) => this.setState({password: text})} />
            <Button title="login" color="green" onPress={this.onLoginPress}  ></Button>

            <Text style={styles.link} onPress={() =>this.props.navigation.navigate('Signup')}>Create Account</Text>
            <Text onPress={() =>this.props.navigation.navigate('ForgotPssword')} >Forgot Password</Text>

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
    link: {
      padding:20,
    },
});