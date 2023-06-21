import { Action } from '../../../App/types/Action';
import { State } from './State';

export type Context = {
  state: State;
  dispatch: (obj: Action) => void;
};
