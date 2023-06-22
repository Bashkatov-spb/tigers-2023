import { Action } from '../../App/types/Action';
import { AuthState } from '../../features/auth/types/AuthState';

const initialState: AuthState = {
  user: undefined,
};

const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
  switch (action.type) {
    case 'auth/reg':
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/log':
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/check':
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
