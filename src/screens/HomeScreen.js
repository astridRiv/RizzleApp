import React from 'react';

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
            </Button>
        </Content>
        <Footer>
        </Footer>
      </Container>
    );
  }

}
