import React, { Component } from 'react';
import {
  StackNavigator,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  Navigator 
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }


  onClickListener = (viewId) => {
    if (viewId == "restore_password") {
       Alert.alert("hi")
      //this.props.navigation.navigate('forgotPassword')
    }
    // Alert.alert("Alert", "Button pressed "+viewId);
  }
 
  

  render() {
   
    return (
      // <Navigator initialRoute = {{id: 'forgotPassword'}}
      // renderScene = {this.navigatorRenderScene} />
 
   
      
      <View style={styles.container}>
       <Text style={styles.titleText}>Rizzle</Text>

        <View style={styles.inputContainer}>
         {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('forgotPassword', {prevScreenTitle: 'forgotPassword'})}>
            <Text>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6b800',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#e69900',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#cc9900",
  },
  loginText: {
    color: 'white',
  },
  titleText:{
      fontSize:100,
      marginBottom:150,
      


  }
});