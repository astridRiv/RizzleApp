import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Alert,} from 'react-native';
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
  Title,
} from 'native-base';
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
      
     
    };
  }

  goToInstructions = () =>
  {
    const {navigate} = this.props.navigation;
    Alert.alert('You have started the game')
    navigate('Riddles')

  }


  getInitialState() {

    return  {
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
       {/* <ImageBackground source={require('../assets/images/1.png')}style={{width: '100%', height: '100%'}}> */}
        <Header>
          <Body>
            <View style={styles.mainContainer}>
              <Title style={styles.headerText}>
                {this.state.header}
              </Title>
            </View>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View style={styles.mainContainer}>
            <Button 
              type="primary"
              onPress={this.goToInstructions}
              containerStyle={styles.buttonContainer}
              title="START" >
                    START
            </Button>
          </View>
        </Content>

        <MapView style={{flex:8}}
          region={this.state.region}
         
             region = {{
              latitude: 25.756464,
              longitude: -80.37626,
              latitudeDelta: lat,
              longitudeDelta: longi,
              
            }}
            

            showUserLocation={true}
            followsUserLocation={true}

            // {
            //   this.state.markers.map
            // }
            
            />
            
            
            
          {/* {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))} */}
      

        <View style={styles.textContainer}>
             <Button 
                type="secondary"
                onPress={() => Alert.alert('You have 3 attempts.')}
                containerStyle={styles.HintContainer}
              >
                Want a Hint?
          
             </Button>
        </View>
        {/* </ImageBackground> */}
      </Container>
      
    );
  }

}
this.state = {
  markers:[
    {
      coordinate:{
        latitude: 25.760146,
        longitude: -80.373279,
      },
      title: "Red Parking Garage",
      description: "The red place",
    },
    {
      title:'hello',
      coordinates: {
        latitude: 26.75022,
        longitude: -81.45656,
      },
    }
  ]
}
var greenLibrary = [
  {
    latitude: 25.757202,
    longitude: -80.373902,
    title: 'FIU Green Library',
    subtitle: 'Go Here!'

  }
];
const styles = StyleSheet.create(
  {
  headerText: {
    fontFamily: 'Roboto_medium',
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
    // backgroundColor: '#A7CFE8',
  
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
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },

});

