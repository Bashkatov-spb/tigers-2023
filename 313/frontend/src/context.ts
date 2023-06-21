import { createContext } from 'react';
import { Context } from './features/animals/types/Context';

const initialContext: Context = {
  state: {
    animals: [],
    users: [],
  },
  dispatch: () => {},
};

const StateContext = createContext(initialContext);
export default StateContext;
