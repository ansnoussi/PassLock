import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignupScreen from '../screens/SignupScreen';

export default createSwitchNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  ForgotPssword: ForgotPasswordScreen,
  Main: MainTabNavigator,
});