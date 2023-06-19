export type User = {
  id: number;
  email: string;
  username: string;
  name: string;
  address: UserAddress;
};

export type UserAddress = {
  street: string;
  city: string;
};

export type UserId = User['id'];
