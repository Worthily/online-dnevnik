import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  lable: {
    fontSize: 16,
    marginLeft: '15%',
  },
  inputWrapper: {
    marginTop: 7,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderColor: 'black',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
  },
});

export default styles;
