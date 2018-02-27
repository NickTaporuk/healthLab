// @flow
import { GET_USERS } from '../actions/persons';

type actionType = {
  +type: string,
  +payload: any
};

export default function persons(state = [], action: actionType) {
  switch (action.type) {
    case GET_USERS:
      return { state, ...action.payload };
    default:
      return state;
  }
}
