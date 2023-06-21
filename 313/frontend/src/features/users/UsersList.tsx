import React, { useContext } from 'react';
import StateContext from '../../context';
import UserItem from './UserItem';

function UsersList(): JSX.Element {
  const { state } = useContext(StateContext);
  return (
    <div>
      {state.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
