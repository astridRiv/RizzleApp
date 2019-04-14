import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity,Alert,} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {
  Container,
  Header,
  Content,
  Left,
  View,
  Right,
  Body,
  Icon,
  Text,
  Title,
} from 'native-base';
//import { WebBrowser } from 'expo';

//import { MonoText } from '../components/StyledText';
import Button from 'react-native-flat-button'
const screen = Dimensions.get('window');
const ratio = screen.width/screen.height;
const lat = 0.0922;
const longi = lat * ratio;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      region: {
        latitude: 25.756464,
        longitude: -80.37626,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      },
      header: "Explore FIU",
      information: "Explore the campus of Florida International University and discover all the riddles! "
    };
  }


  getInitialState() {

    return {
      region: {
        latitude: 25.756464,
        longitude: -80.37626,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      },
    };
  }


  render() {

    return (

      <Container style={styles.paraText}>
        <Header>
          <Body>
            <View style={styles.mainContainer}>
            <Title style={styles.headerText}>
            {this.state.header}
            </Title>
            </View>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={styles.mainContainer}>
        <Button 
                type="primary"
                onPress={() => Alert.alert('You have started the game.')}
                containerStyle={styles.buttonContainer}
              >
                START
          
        </Button>
        </View>
        </Content>

        <MapView style={styles.map}
          region={this.state.region}
          onRegionChange={() => {
            let region = {
              latitude: 25.756464,
              longitude: -80.37626,
              latitudeDelta: lat,
              longitudeDelta: longi,
            }

            this.setState({ region });
          }} >
          {/* {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))} */}
        </MapView>
             <View style={styles.textContainer}>
             <Button 
                type="secondary"
                onPress={() => Alert.alert('You have 3 attempts.')}
                containerStyle={styles.HintContainer}
              >
                Want a Hint?
          
        </Button>
  </View>
      </Container>
    );
  }

}
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    width: '95%',
    height: '65%',
    top:145,
    bottom: 0,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#2D3D47',
    borderRadius: 13,
    margin: 10,
    shadowOpacity: 0.4,
    elevation: 1.5,
    marginTop: 5,
    marginBottom: 19,
    shadowRadius: 1,
    shadowOffset: {height: 2, width: 0},
    flex:100,
    padding: 10,
    overflow: 'hidden',
   
  },
  headerText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#01afd1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    padding: 10,
    overflow: 'hidden',
  
    
    
  },
  paraText:{
    color: '#EFF6F7',
    backgroundColor: '#A7CFE8',
  
  },
  mainContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: '#f8e71c',
    marginBottom: 400,
    width: 200,
    height: 50,
    padding: 10,
  },
  HintContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'red',
    marginBottom: 400,
    width: 200,
    height: 50,
    padding: 10,
  },
  
  textContainer:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: 500,
    height: 75,
    right: 70,
   flexWrap: 'wrap',
  

  }

});
