import React from 'react';
import { View, Button, Pressable, Text } from 'react-native';
import styles from '../../styles/components/AuthButtonStyles';

function AuthButton(props: { lable: string; onClick(): void }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={styles.button}
        onPress={() => {
          props.onClick();
        }}>
        <Text style={styles.lable}>{props.lable}</Text>
      </Pressable>
    </View>
  );
}

export default AuthButton;
