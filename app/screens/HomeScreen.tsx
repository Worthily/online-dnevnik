import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp, State } from '../type';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppNavBar from '../components/AppNavBar';
import styles from '../styles/screens/HomeScreenStyles';
import styles2 from '../styles/components/AppNavBarStyles';
import { PROGRESS } from '../navigation/constants';
import AuthButton from '../components/AuthButton';
import { useSelector } from 'react-redux';
import Post from '../components/Post';

function HomeScreen() {
  const navigation = useNavigation<authScreenProp>();
  const posts = useSelector((state: State) => {
    return state.post;
  });
  const postsSection = posts.map(item => {
    return (
      <View key={item.id}>
        <Post post={item} />
      </View>
    );
  });
  return (
    <View style={styles.home}>
      <ScrollView>{postsSection}</ScrollView>
    </View>
  );
}

export default HomeScreen;
