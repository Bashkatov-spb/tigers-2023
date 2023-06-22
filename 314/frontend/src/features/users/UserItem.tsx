import React from 'react';
import { useDispatch } from 'react-redux';
import { User, UserId } from './types/User';

function UserItem({ user }: { user: User }): JSX.Element {
  const dispatch = useDispatch();
  const onHandleRemove = async (value: UserId): Promise<void> => {
    const res = await fetch(`/api/users/${value}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.message === 'success') {
      dispatch({ type: 'users/DIE', payload: value });
    }
  };

  const onHandleChangeAdminStatus = async (): Promise<void> => {
    const res = await fetch(`/api/users/${user.id}`, {
      method: 'PUT',
    });
    const data = await res.json();
    if (data.message === 'success') {
      dispatch({ type: 'users/changeAdminStatus', payload: user.id });
    }
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => onHandleRemove(user.id)} type="button">
        DIE
      </button>
      <input type="checkbox" checked={user.isAdmin} onChange={onHandleChangeAdminStatus} />
    </div>
  );
}

export default UserItem;
