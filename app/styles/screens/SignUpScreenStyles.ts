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
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  authSubTitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20,
  },
  goToSignInBtnWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: '10%',
    alignItems: 'center',
    fontSize: 16,
  },
  authGoToSignInBtn: {
    fontSize: 18,
    marginLeft: 10,
    color: 'blue',
  },
});

export default styles;
