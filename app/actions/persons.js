import type { personsStateType } from '../reducers/persons';

export const GET_USERS = 'GET_USERS';

export function getUsers(payload) {
  return (dispatch) => dispatch({ type: GET_USERS, payload : payload.data });
}
