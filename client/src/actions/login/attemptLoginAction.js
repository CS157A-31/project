/* eslint-disable import/prefer-default-export */
import {
    ATTEMPT_LOGIN_FAILED,
    ATTEMPT_LOGIN_SUCCESSFULLY
  } from '../../constant';
<<<<<<< HEAD

export const attemptLoginFailed = error => ({
  type: ATTEMPT_LOGIN_FAILED,
  payload: error
});

export const attemptLoginSuccessfully = user => ({
  type: ATTEMPT_LOGIN_SUCCESSFULLY,
  payload: user
});
=======
  
  export const attemptLoginFailed = error => ({
    type: ATTEMPT_LOGIN_FAILED,
    payload: error
  });
  
  export const attemptLoginSuccessfully = user => ({
    type: ATTEMPT_LOGIN_SUCCESSFULLY,
    payload: user
  });
>>>>>>> Initial Login page setup
