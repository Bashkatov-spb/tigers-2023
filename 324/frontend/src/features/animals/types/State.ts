import { Animal } from './Animal';
import { User } from '../../users/types/User';

export type AnimalsState = {
  animals: Animal[];
  error: string | undefined;
};
export type UsersState = {
  users: User[];
  error: string | undefined;
};
