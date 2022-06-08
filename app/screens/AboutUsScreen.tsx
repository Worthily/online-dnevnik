import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Form, Field } from 'react-final-form';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../type';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function AboutUsScreen() {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View>
      <ScrollView>
        <KeyboardAwareScrollView>
          <Text>AboutUsScreen</Text>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
}

export default AboutUsScreen;
