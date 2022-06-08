import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import styles from '../styles/screens/SignUpScreenStyles';
import { SIGNIN } from '../navigation/constants';
import { useNavigation } from '@react-navigation/native';
import {
  validationEmail,
  validationName,
  validationPass,
} from '../store/validation';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { authScreenProp, State } from '../type';
import { registrActionCreator } from '../store/actions';

function SignUpScreen() {
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    password: '',
  });

  function onSubmit() {
    dispatch(
      registrActionCreator({
        email: formState.email,
        name: formState.name,
        password: formState.password,
      }),
    );
  }

  return (
    <View>
      <View>
        <Text style={styles.authTitle}>
          Добро пожаловать в "Личный кабинет студента"
        </Text>
        <Text style={styles.authSubTitle}>Регистрация</Text>
        <Form
          onSubmit={onSubmit}
          initialValues={{ email: '', password: '' }}
          render={({ handleSubmit }) => (
            <View>
              <Field
                name="email"
                component={AuthInput}
                lable={'Почта'}
                valid={validationEmail}
                onChangeText={(val: string) => {
                  setFormState({ ...formState, email: val });
                }}
              />
              <Field
                name="name"
                component={AuthInput}
                lable={'ФИО'}
                valid={validationName}
                onChangeText={(val: string) => {
                  setFormState({ ...formState, name: val });
                }}
              />
              <Field
                name="password"
                component={AuthInput}
                lable={'Пароль'}
                secureTextEntry={true}
                valid={validationPass}
                onChangeText={(val: string) => {
                  setFormState({ ...formState, password: val });
                }}
                errorExists={user.errorExists}
                errorText={user.errorText}
              />
              <AuthButton lable={'Sign-up'} onClick={handleSubmit} />
            </View>
          )}
        />
      </View>
      <View style={styles.goToSignInBtnWrapper}>
        <Text>Уже зарегистрированы?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SIGNIN);
            // dispatch(
            //   onErrorActionCreator({
            //     errorExists: false,
            //     errorText: '',
            //   }),
            // );
          }}>
          <Text style={styles.authGoToSignInBtn}>Авторизация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpScreen;
