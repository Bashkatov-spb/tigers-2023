import { Animal, AnimalId } from '../../features/animals/types/Animal';
import { User, UserId } from '../../features/users/types/User';

export type Action =
  | { type: 'animals/load'; payload: Animal[] }
  | { type: 'animals/remove'; payload: AnimalId }
  | { type: 'animals/add'; payload: Animal }
  | { type: 'users/load'; payload: User[] }
  | { type: 'users/DIE'; payload: UserId }
  | { type: 'users/changeAdminStatus'; payload: UserId }
  | { type: 'auth/reg'; payload: User }
  | { type: 'auth/log'; payload: User }
  | { type: 'auth/check'; payload: User }
  | { type: 'auth/logout' };
