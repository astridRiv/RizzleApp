import React from 'react';
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

  constructor() {
    super();
    this.state = {
    isReady: false
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
    
    onRegionChange(region) {
      this.setState({ region });
    }
  render() {

    return (

      <Container>
        <Header>
          <Left>
            <Button transparent>
            <Icon name='menu'/>

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
            
  <MapView style={styles.map}
    region={this.state.region}
    onRegionChange={this.onRegionChange}
    />
            </Button>
        </Content>
        <Footer>
        </Footer>
      </Container>
    );
  }

}
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
