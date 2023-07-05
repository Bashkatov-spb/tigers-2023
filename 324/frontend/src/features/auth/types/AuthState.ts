import { User } from '../../users/types/User';

export type AuthState = {
  user: User | undefined;
  error: string | undefined;
  pending: boolean;
};
