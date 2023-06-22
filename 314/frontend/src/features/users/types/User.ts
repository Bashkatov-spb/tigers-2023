export type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

export type UserId = User['id'];
