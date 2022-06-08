import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Pressable, Image, Text, TouchableOpacity } from 'react-native';
import {
  ANNOUNCEMENT,
  HOME,
  PROGRESS,
  TEACHING,
} from '../../navigation/constants';
import styles from '../../styles/components/AppNavBarStyles';
import { appScreenProp, authScreenProp } from '../../type';
import AuthButton from '../AuthButton';

function AppNavBar() {
  const navigation = useNavigation<appScreenProp>();
  return (
    <View style={styles.nav}>
      <View style={styles.navWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(ANNOUNCEMENT);
          }}>
          <Image
            style={styles.img}
            source={require('../../assets/img/apps.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(PROGRESS);
          }}>
          <Image
            style={styles.img}
            source={require('../../assets/img/marks.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(TEACHING);
          }}>
          <Image
            style={styles.img}
            source={require('../../assets/img/stdy.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(HOME);
          }}>
          <Image
            style={styles.img}
            source={require('../../assets/img/home.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AppNavBar;
