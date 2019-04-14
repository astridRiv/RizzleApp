import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity,AlertIOS,} from 'react-native';
import MapView from 'react-native-maps';
import {
  Container,
  Header,
  Content,
  Button,
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
      header: "RIZZLE",
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
            <Title style={styles.headerText}>
            {this.state.header}
            </Title>
          </Body>
          <Right />
        </Header>

        <Content>
          
        <Button large green>
            <Text>START</Text>
          </Button>
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
          }}
        />

                  
                  <Text style={styles.paraText}>
          {this.state.information}</Text>
  
      </Container>
    );
  }

}
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    width: '95%',
    height: '65%',
    top:150,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#01afd1',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
    
  },
  paraText:{
    color: '#EFF6F7',
    backgroundColor: '#A7CFE8',
  },
  mainContainer:{
    flex:300,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    marginBottom: 400,
  },
});
