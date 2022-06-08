import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  AboutUs: undefined;
  SpecialtyList: undefined;
  Contacts: undefined;
  Progress: undefined;
  Teaching: undefined;
  Announcement: undefined;
  Profile: undefined;
};
export type authScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
export type appScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type User = {
  id: string;
  email: string;
  name: string;
  token: string;
  pass: string;
  groupId: string;
  banned: boolean;
  bannedReason: string;
  role: string;
  errorExists: boolean;
  errorText: string;
  logged: boolean;
};

export type Users = {
  id: string;
  name: string;
  groupId: string;
  banned: boolean;
  bannedReason: string;
  role: string;
};

export type Exersize = {
  id: string;
  title: string;
  content: string;
  file: string;
  userId: string;
  groupId: string;
  disciplineId: string;
};

export type AnswerExersize = {
  id: string;
  content: string;
  file: string;
  studentI: string;
  exerciseId: string;
  markId: string;
};

export type Mark = {
  id: string;
  value: string;
  teacherId: string;
  studentId: string;
  groupId: string;
  exersizeId: string;
  disciplineId: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  img: string;
  userId: string;
};

export type Comment = {
  id: string;
  text: string;
  userId: string;
  postId: string;
};

export type Group = {
  id: string;
  value: string;
};

export type Discipline = {
  id: string;
  value: string;
};

export type Workload = {
  id: string;
  disciplineId: string;
  groupId: string;
  teacherId: string;
};

export type State = {
  user: User;
  users: Users[];
  exersize: Exersize[];
  answerExersize: AnswerExersize[];
  mark: Mark[];
  post: Post[];
  comment: Comment[];
  group: Group[];
  discipline: Discipline[];
  workload: Workload[];
};
