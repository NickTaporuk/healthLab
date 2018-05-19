import { GET_USERS } from '../actions/persons';

export default function persons(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      console.log(action);

      return action.payload;
    default:
      return state;
  }
}
