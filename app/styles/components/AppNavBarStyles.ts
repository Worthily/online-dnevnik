import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#ffffff',
  },
  navWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40,
    height: 60,
  },
  img: {
    maxWidth: 40,
    maxHeight: 40,
  },
  button: {
    width: 40,
    height: 40,
    zIndex: 1,
  },
});

export default styles;
