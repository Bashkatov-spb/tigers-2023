import React, { useEffect, useState } from 'react';
import { User, UserId } from './types/User';

function Json(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const onHandleRemove = (value: UserId): void => {
    const filteredArray = users.filter((user) => user.id !== value);
    setUsers(filteredArray);
  };

  return (
    <div>
      <h1>JSON Page</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user.address.street}</p>
          <button
            onClick={() => onHandleRemove(user.id)}
            type="button"
            style={{
              backgroundColor: 'tomato',
              padding: '10px',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Json;
