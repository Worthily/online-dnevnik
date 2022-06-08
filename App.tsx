import React from 'react';
import AppNavigationContainer from './app/navigation/AppNavigationContainer';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/store';
import styles from './app/styles/screens/HomeScreenStyles';
import AppNavBar from './app/components/AppNavBar';

function App() {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
}

export default App;
