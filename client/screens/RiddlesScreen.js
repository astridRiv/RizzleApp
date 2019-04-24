import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class RiddlesScreen extends React.Component {
  static navigationOptions = {
    title: 'Riddles',
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/2.png')}style={{width: '100%', height: '100%'}}>
          <View style= {styles.textground}>
              <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 10}}> Memories held, feet tread attop step on me and academic progress comes to a stop. What am I?</Text>
              {/* <Button>Answer</Button>
              <Button>Hint</Button> */}
          </View> 
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    textground: {
      marginTop: 10,
      marginBottom: 0,
      marginLeft: 18,
      paddingBottom: 0,
      width: '90%',
      height: '95%',
      backgroundColor: 'rgba(255,255,255,0.6)',
  },
});