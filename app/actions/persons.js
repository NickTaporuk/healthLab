// @flow
import type { personsStateType } from '../reducers/persons';

export const GET_USERS = 'GET_USERS';

type usersDataType = Array ;

export function getUsers(payload?: usersDataType = []) {
  dispatch({ type: GET_USERS, payload });
}
