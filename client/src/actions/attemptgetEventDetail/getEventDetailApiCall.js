import axios from 'axios';

import {
  attemptGetEventDetailSuccessfully,
  attemptGetEventDetailFailed
} from './attemptGetEventDetailAction';

import { HOST, EVENT_URI } from '../../constant';

// Contribute
export const attemptGetEventDetail = userData => dispatch => {
  axios
    .post(`${HOST}${EVENT_URI}/${userData.eventID}`, userData)
    .then(res => {
      return dispatch(attemptGetEventDetailSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetEventDetailFailed(err));
    });
};
