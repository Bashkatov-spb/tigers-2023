/* eslint-disable import/prefer-default-export */
import { Action } from '../../App/types/Action';
import { UsersState } from '../../features/animals/types/State';

const initialState: UsersState = {
  users: [],
};

export function usersReducer(state: UsersState = initialState, action: Action): UsersState {
  switch (action.type) {
    case 'users/load':
      return {
        ...state,
        users: action.payload,
      };
    case 'users/DIE':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case 'users/changeAdminStatus':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, isAdmin: !user.isAdmin };
          }
          return user;
        }),
      };
    default:
      return state;
  }
}
