import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { SIGNIN, SIGNUP } from './constants';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SIGNIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SIGNIN} component={SignInScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
