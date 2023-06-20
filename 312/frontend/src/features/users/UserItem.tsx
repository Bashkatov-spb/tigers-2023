import React, { useContext } from 'react';
import { User, UserId } from './types/User';
import StateContext from '../../context';

function UserItem({ user }: { user: User }): JSX.Element {
  const { dispatch } = useContext(StateContext);

  const onHandleRemove = async (value: UserId): Promise<void> => {
    const res = await fetch(`/api/users/${value}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.message === 'success') {
      dispatch({ type: 'users/DIE', payload: value });
    }
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => onHandleRemove(user.id)} type="button">
        DIE
      </button>
    </div>
  );
}

export default UserItem;
