import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#e3e3e3',
    height: '100%',
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
  },
  post: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  authorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postTitle: {
    marginBottom: 10,
  },
  postMain: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 10,
    marginBottom: 10,
  },
  imgWrapper: {
    marginTop: 10,
    width: 350,
    height: 200,
  },
  postImg: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
  },
  commentWrapper: {
    marginBottom: 10,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  commentText: {
    marginTop: 10,
    maxWidth: 290,
  },
});

export default styles;
