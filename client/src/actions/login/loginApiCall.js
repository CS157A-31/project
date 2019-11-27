import axios from 'axios';

import {
  attemptLoginSuccessfully,
  attemptLoginFailed
} from './attemptLoginAction';

import { HOST, LOGIN_URI } from '../../constant';

// Register
export const attemptLogin = userData => dispatch => {
  axios
    .post(`${HOST}${LOGIN_URI}`, userData)
    .then(res => {
      console.log('attempt login callAPI');
      console.log(res.data);
      dispatch(attemptLoginSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptLoginFailed(err));
    });
};