import { SET_USERNAME, SET_PASSWORD } from '../actions/actionTypes';
import { usersInitialState } from './initialState';

export function users(state = usersInitialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
}