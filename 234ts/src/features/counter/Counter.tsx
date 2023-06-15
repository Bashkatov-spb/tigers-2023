/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import InputStep from './InputStep';
import BtnPlus from './BtnPlus';
import BtnMinus from './BtnMinus';
import userss from './mockApi';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UserId = User['id'];
function Counter(): JSX.Element {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users/')
    //   .then((response) => response.json())
    //   .then((json) => setUsers(json));
    setUsers(userss);
  }, []);

  // useEffect(() => {
  //   console.log('effect with []');
  // }, []);

  // useEffect(() => {
  //   console.log('effect with [count]');
  // }, [count]);

  function onHandlePlus(): void {
    setCount((prev) => prev + step);
  }

  function onHandleMinus(): void {
    setCount(count - step);
  }

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStep(+e.target.value);
  };

  // const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setStep(+e.target.value);
  // };

  const onHandleRemove = (some: UserId): void => {
    setUsers((prev) => prev.filter((user) => user.id !== some));
  };

  return (
    <div>
      <InputStep step={step} onHandleChange={onHandleChange} />
      <BtnPlus onHandlePlus={onHandlePlus} />
      <h3>{count}</h3>
      <BtnMinus onHandleMinus={onHandleMinus} />
      {users.map((user) => (
        <div style={{ display: 'flex' }} key={user.id}>
          <h4>{user.username}</h4>
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
          <button onClick={() => onHandleRemove(user.id)} type="button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Counter;
