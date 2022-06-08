import React, { useState } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { View, TextInput, Text } from 'react-native';
import styles from '../../styles/components/AuthInputStyles';

interface AuthInput extends FieldRenderProps<string> {
  lable: string;
  secureTextEntry?: boolean;
  valid(val: string): { errorExists: boolean; errorText: string };
  onChangeText(val: string): void;
  errorExists: boolean;
  errorText: string;
}

const AuthInput: React.FC<AuthInput> = props => {
  const [error, setError] = useState({
    errorExists: false,
    errorText: '',
  });
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={styles.lable}>{props.lable}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={!error.errorExists ? styles.input : styles.errorInput}
          secureTextEntry={props.secureTextEntry}
          onChangeText={(text: string) => {
            setText(text);
            props.onChangeText(text);
          }}
          onBlur={() => {
            const error = props.valid(text);
            setError({
              errorExists: error.errorExists,
              errorText: error.errorText,
            });
          }}
        />
        {error.errorExists ? (
          <Text style={styles.errorText}>{error.errorText}</Text>
        ) : (
          <></>
        )}
        {props.errorExists ? (
          <Text style={styles.errorText}>{props.errorText}</Text>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default AuthInput;
