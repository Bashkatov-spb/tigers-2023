export type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

export type UserId = User['id'];

// export type UserWithOutId = Omit<User, 'id'>;

export type UserAuthReg = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};

export type UserAuthLog = {
  email: string;
  password: string;
};
