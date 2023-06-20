import { Action } from './App/types/Action';
import { State } from './features/animals/types/State';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'animals/load':
      return {
        ...state,
        animals: action.payload,
      };
    case 'animals/remove':
      return {
        ...state,
        animals: state.animals.filter((animal) => animal.id !== action.payload),
      };
    case 'animals/add':
      return {
        ...state,
        animals: [...state.animals, action.payload],
      };
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
  }
}

export default reducer;
