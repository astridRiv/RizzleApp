import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import InstructionsScreen from '../screens/InstructionsScreen';
import RiddlesScreen from '../screens/RiddlesScreen'; //adds riddle nav option
import SettingsScreen from '../screens/SettingsScreen';
import LoginView from '../screens/LoginView';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const InstructionsStack = createStackNavigator({
  Instructions: InstructionsScreen,
});

InstructionsStack.navigationOptions = {
  tabBarLabel: 'Instructions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

//Adds Riddle nav option
const RiddlesStack = createStackNavigator({
  Riddles: RiddlesScreen,
});

RiddlesStack.navigationOptions = {
  tabBarLabel: 'Riddles',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const LoginStack = createStackNavigator({
  Login: LoginView
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS == 'ios' ? 'ios-options' : 'md-options'}
      />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  InstructionsStack,
  RiddlesStack, //adds riddle nav option
  SettingsStack,
  LoginStack,
});
