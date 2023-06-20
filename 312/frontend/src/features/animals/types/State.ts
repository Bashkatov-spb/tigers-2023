import { Animal } from './Animal';
import { User } from '../../users/types/User';

export type State = {
  animals: Animal[];
  users: User[];
};
