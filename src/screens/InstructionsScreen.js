import React from 'react';
import { ScrollView, StyleSheet, Text, ImageBackground, View} from 'react-native';

export default class InstructionsScreen extends React.Component {
  //edits panel at top of the screen
  static navigationOptions = {
    title: 'Instructions',
  };

  render() {
    return (
      
      <ImageBackground source={require('../assets/images/1.png')}style={{width: '100%', height: '100%'}}>
          <View style= {styles.textground}>
            <ScrollView style={styles.container}>
              <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 10}}>The Rizzle map displays different locations on the Florida International University. The red markers indicate different locations on the campus with riddles, each riddle is worth 100 points.</Text>
              <Text style={{fontSize:20, marginLeft: 10, marginRight: 10, marginTop: 10}}> 1. Go to a location with a * icon to unlock the corresponding riddle.</Text>
              <Text style={{fontSize:20, marginLeft: 10, marginRight: 10, marginTop: 10}}> 2. Solve the Riddle; Each riddle has one hint and only 3 attempts can be made before the riddle becomes locked and the answer.</Text>
              <Text style={{fontSize:20, marginLeft: 10, marginRight: 10, marginTop: 10}}> 3. Once a riddle is locked or solved move on to another riddle until all the riddle's are completed.</Text>
              <Text style={{fontSize:20, marginLeft: 10, marginRight: 10, marginTop: 10}}> 4. See the leadership board to see your what your score is.</Text>
            </ScrollView>
          </View> 
        </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    textAlign:'center',
    },
      
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
