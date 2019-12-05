import axios from "axios";

import {
  attemptGetPartyMembersSuccessfully,
  attemptGetPartyMembersFailed
<<<<<<< HEAD:client/src/apiCall/party/getPartyMembersApiCall.js
} from '../../actions/party/attemptGetPartyMembersAction';
=======
} from "./attemptGetPartyMembersAction";
>>>>>>> home page:client/src/actions/party/getPartyMembersApiCall.js

import { HOST, PARTY_URI } from "../../constant";

// Register
export const attemptGetPartyMembers = partyData => dispatch => {
  return axios
<<<<<<< HEAD:client/src/apiCall/party/getPartyMembersApiCall.js
    .post(`${HOST}${PARTY_URI + '/members'}`, partyData)
=======
    .post(`${HOST}${PARTY_URI + "/members"}`, partyData)
>>>>>>> home page:client/src/actions/party/getPartyMembersApiCall.js
    .then(res => {
      console.log("attempt get members callAPI");
      console.log(res.data);
      const payload = dispatch(attemptGetPartyMembersSuccessfully(res.data));
      console.log("payload", payload);
      return payload;
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      dispatch(attemptGetPartyMembersFailed(err));
    });
};
