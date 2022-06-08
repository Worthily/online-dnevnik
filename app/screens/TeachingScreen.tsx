import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Form, Field } from 'react-final-form';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../type';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles/screens/TeachingScreenStyles';

function TeachingScreen() {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <KeyboardAwareScrollView>
          <Text>TeachingScreen</Text>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
}

export default TeachingScreen;
