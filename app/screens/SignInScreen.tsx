import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Form, Field } from 'react-final-form';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp, State } from '../type';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { SIGNUP } from '../navigation/constants';
import styles from '../styles/screens/SignInScreenStyles';
import { validationEmail, validationPass } from '../store/validation';
import { authentActionCreator } from '../store/actions';

function SignInScreen() {
  const navigation = useNavigation<authScreenProp>();
  const user = useSelector((state: State) => state.user);
  // const userLoader = useSelector((state: State) => state.loader.user);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ email: '', password: '' });
  function onSubmit() {
    dispatch(
      authentActionCreator({
        email: formState.email,
        password: formState.password,
      }),
    );
  }

  return (
    <View>
      <ScrollView>
        <KeyboardAwareScrollView>
          <View style={styles.authImageWrapper}></View>
          <View>
            <Text style={styles.authTitle}>
              Добро пожаловать в "Личный кабинет студента"
            </Text>
            <Text style={styles.authSubTitle}>Авторизация</Text>
            <Form
              onSubmit={onSubmit}
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
                  <AuthButton lable="ОК" onClick={handleSubmit} />
                </View>
              )}
            />
          </View>
          <View style={styles.goToSignUpBtnWrapper}>
            <Text>Нет аккаунта?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SIGNUP);
              }}>
              <Text style={styles.authGoToSignUpBtn}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
}

export default SignInScreen;
