import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  authImageWrapper: {
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
    marginBottom: 20,
  },
  authImage: {
    width: 150,
    height: 150,
  },
  authTitle: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  authSubTitle: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20,
  },
  goToSignUpBtnWrapper: {
    fontFamily: 'SFUIText-Regular',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: '10%',
    alignItems: 'center',
    fontSize: 16,
  },
  authGoToSignUpBtn: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 18,
    marginLeft: 10,
    color: 'blue',
  },
});

export default styles;
