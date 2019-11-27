import axios from 'axios';

import {
  attemptGetPartyMembersSuccessfully,
  attemptGetPartyMembersFailed
} from './attemptGetPartyMembersAction';

import { HOST, PARTY_URI } from '../../constant';

// Register
export const attemptGetPartyMembers = partyData => dispatch => {
  axios
    .post(`${HOST}${PARTY_URI}`, partyData)
    .then(res => {
      console.log('attempt get members callAPI');
      console.log(res.data);
      const payload = dispatch(attemptGetPartyMembersSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetPartyMembersFailed(err));
    });
};