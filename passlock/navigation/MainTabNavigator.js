import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import PasswordsScreen from '../screens/PasswordsScreen';
import AddScreen from '../screens/AddScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Passwords: PasswordsScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Passwords',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="md-unlock"
    />
  ),
};

const AddStack = createStackNavigator({
  Add: AddScreen,
});

AddStack.navigationOptions = {
  tabBarLabel: 'Add New',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="md-add"
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
      name="md-settings"
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AddStack,
  SettingsStack,
});
