/* eslint-disable import/prefer-default-export */
import { Action } from '../../App/types/Action';
import { AnimalsState } from '../../features/animals/types/State';

const initialState: AnimalsState = {
  animals: [],
};

export function animalsReducer(state: AnimalsState = initialState, action: Action): AnimalsState {
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
    default:
      return state;
  }
}
