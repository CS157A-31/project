import axios from "axios";

import {
  attemptLoginSuccessfully,
  attemptLoginFailed
<<<<<<< HEAD:client/src/apiCall/auth/loginApiCall.js
} from '../../actions/auth/attemptLoginAction';

import { HOST, LOGIN_URI, USER_ID } from '../../constant';
=======
} from "./attemptLoginAction";

import { HOST, LOGIN_URI } from "../../constant";
>>>>>>> Group page (#42):client/src/actions/login/loginApiCall.js

import { setTokenToLocalStorage } from "../../utils";

<<<<<<< HEAD:client/src/apiCall/auth/loginApiCall.js
=======
import { USER_ID } from "../../constant";

>>>>>>> Group page (#42):client/src/actions/login/loginApiCall.js
// Register
export const attemptLogin = userData => dispatch => {
  axios
    .post(`${HOST}${LOGIN_URI}`, userData)
    .then(res => {
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.userID);
      const payload = dispatch(attemptLoginSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      dispatch(attemptLoginFailed(err));
    });
};
