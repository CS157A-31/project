import axios from 'axios';

import {
  attemptLoginSuccessfully,
  attemptLoginFailed
} from './attemptLoginAction';

import { HOST, LOGIN_URI } from '../../constant';

import { setTokenToLocalStorage } from '../../utils';

import { USER_ID } from '../../constant';

// Register
export const attemptLogin = userData => dispatch => {
  axios
    .post(`${HOST}${LOGIN_URI}`, userData)
    .then(res => {
<<<<<<< HEAD
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.userID);

=======
      console.log('attempt login callAPI');
      console.log(res.data);
<<<<<<< HEAD
>>>>>>> Initial Login page setup
      const payload = dispatch(attemptLoginSuccessfully(res.data));
      return payload;
=======
      dispatch(attemptLoginSuccessfully(res.data));
>>>>>>> Initial Login page setup
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptLoginFailed(err));
    });
};
