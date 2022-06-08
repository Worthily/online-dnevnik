import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { useSelector } from 'react-redux';
import { State } from '../type';

const AppNavigationContainer = () => {
  const isLogged = useSelector((state: State) => {
    return state.user.logged;
  });
  return (
    <NavigationContainer>
      {/* {isLogged ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
};
export default AppNavigationContainer;
