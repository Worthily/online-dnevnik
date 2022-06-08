import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { STUDENT } from '../navigation/constants';
import {
  userInitialState,
  usersInitialState,
  groupInitialState,
  exersizeInitialState,
  disciplineInitialState,
  workloadInitialState,
  answerExersizeInitialState,
  markInitialState,
  postInitialState,
  commentInitialState,
} from './initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    registr: (
      state,
      {
        payload,
      }: PayloadAction<{ name: string; email: string; password: string }>,
    ) => {
      const { name, email, password } = payload;
      const newUser = {
        ...state,
        email: email,
        name: name,
        pass: password,
        role: STUDENT,
        logged: true,
      };
      return newUser;
    },
    authent: (
      state,
      { payload }: PayloadAction<{ email: string; password: string }>,
    ) => {
      const { email, password } = payload;
      const newUser = {
        ...state,
        email: email,
        name: 'Default ;)',
        pass: password,
        role: STUDENT,
        logged: true,
      };
      return newUser;
    },
  },
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {},
});

export const exersizeSlice = createSlice({
  name: 'exersize',
  initialState: exersizeInitialState,
  reducers: {},
});

export const answerExersizeSlice = createSlice({
  name: 'answerExersize',
  initialState: answerExersizeInitialState,
  reducers: {},
});

export const markSlice = createSlice({
  name: 'mark',
  initialState: markInitialState,
  reducers: {},
});

export const commentSlice = createSlice({
  name: 'comment',
  initialState: commentInitialState,
  reducers: {},
});

export const groupSlice = createSlice({
  name: 'group',
  initialState: groupInitialState,
  reducers: {},
});

export const disciplineSlice = createSlice({
  name: 'discipline',
  initialState: disciplineInitialState,
  reducers: {},
});

export const workloadSlice = createSlice({
  name: 'workload',
  initialState: workloadInitialState,
  reducers: {},
});

export const postSlice = createSlice({
  name: 'post',
  initialState: postInitialState,
  reducers: {},
});

export const reducer = combineReducers({
  user: userSlice.reducer,
  users: usersSlice.reducer,
  exersize: exersizeSlice.reducer,
  answerExersize: answerExersizeSlice.reducer,
  mark: markSlice.reducer,
  post: postSlice.reducer,
  comment: commentSlice.reducer,
  group: groupSlice.reducer,
  discipline: disciplineSlice.reducer,
  workload: workloadSlice.reducer,
});
