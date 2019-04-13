import React from 'react';
import { StyleSheet} from 'react-native';
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
  map: {
    position: 'absolute',
    width: '100%',
    height: '75%',
    bottom: 50,
    alignItems: 'center',
  },
});
