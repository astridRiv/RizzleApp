import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class InstructionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Instructions',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        { /* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text style={{fontWeight: '200', fontSize: 50, textAlign:'center', color: 'blue' }}>How to Play</Text>
        <Text style={{fontSize:25, marginLeft: 20, marginRight: 20}}>Press here</Text>
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
