import React from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import MapView from 'react-native-maps';
import {
  Container,
  Header,
  Content,
  Footer,
  Button,
  Left,
  View,
  Right,
  Body,
  Icon,
  Text,
  Title,
  FooterTab
} from 'native-base';
//import { WebBrowser } from 'expo';

//import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };



  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }



  getInitialState() {

    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }


  render() {

    return (

      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />


            </Button>
          </Left>
          <Body>
            <Title>
              DashBoard
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is the home page</Text>
          <Button large dark>
            <Text>riddle</Text>
          </Button>
        </Content>
        <MapView style={styles.map}
          region={this.state.region}
          onRegionChange={() => {
            let region = {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }

            this.setState({ region });
          }}
        />
        <Button large dark>
            <Text>testing</Text>
          </Button>
        <Footer>
        </Footer>
      </Container>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
  map: {
    position: 'absolute',
    width: '100%',
    height: '75%',
    bottom: 50,
    alignItems: 'center',
  },
});
