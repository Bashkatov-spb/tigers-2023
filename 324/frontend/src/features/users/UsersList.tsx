/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import UserItem from './UserItem';
import { useAppSelector } from '../../redux/store';

function UsersList(): JSX.Element {
  const { users } = useAppSelector((store) => store.users);
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
