import axios from 'axios';

import {
<<<<<<< HEAD
<<<<<<< HEAD
  attemptLoginSuccessfully,
  attemptLoginFailed
=======
  attemptRegisterSuccessfully,
  attemptRegisterFailed
>>>>>>> Initial Login page setup
=======
  attemptLoginSuccessfully,
  attemptLoginFailed
>>>>>>> Integrated server API call
} from './attemptLoginAction';

import { HOST, LOGIN_URI } from '../../constant';

// Register
export const attemptLogin = userData => dispatch => {
  axios
    .post(`${HOST}${LOGIN_URI}`, userData)
    .then(res => {
      console.log('attempt login callAPI');
      console.log(res.data);
<<<<<<< HEAD
<<<<<<< HEAD
      const payload = dispatch(attemptLoginSuccessfully(res.data));
      return payload;
=======
      dispatch(attemptLoginSuccessfully(res.data));
>>>>>>> Initial Login page setup
=======
      const payload = dispatch(attemptLoginSuccessfully(res.data));
      return payload;
>>>>>>> Integrated server API call
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptLoginFailed(err));
    });
};