import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HOME,
  ABOUTUS,
  SPECIALTYLIST,
  CONTACTS,
  PROGRESS,
  TEACHING,
  ANNOUNCEMENT,
  PROFILE,
} from './constants';
import AboutUsScreen from '../screens/AboutUsScreen';
import AnnouncementScreen from '../screens/AnnouncementScreen';
import ContactsScreen from '../screens/ContactsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProgressScreen from '../screens/ProgressScreen';
import SpecialtyListScreen from '../screens/SpecialtyListScreen';
import TeachingScreen from '../screens/TeachingScreen';
import { View } from 'react-native';
import AppNavBar from '../components/AppNavBar';
import styles from '../styles/appStyle';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <View style={styles.appBack}>
      <Stack.Navigator
        initialRouteName={HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={ABOUTUS} component={AboutUsScreen} />
        <Stack.Screen name={SPECIALTYLIST} component={SpecialtyListScreen} />
        <Stack.Screen name={CONTACTS} component={ContactsScreen} />
        <Stack.Screen name={PROGRESS} component={ProgressScreen} />
        <Stack.Screen name={TEACHING} component={TeachingScreen} />
        <Stack.Screen name={ANNOUNCEMENT} component={AnnouncementScreen} />
        <Stack.Screen name={PROFILE} component={ProfileScreen} />
      </Stack.Navigator>
      <AppNavBar />
    </View>
  );
};
export default AppNavigator;
