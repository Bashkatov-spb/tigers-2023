import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Authorization(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onHadleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    dispatch({ type: 'auth/log', payload: data });
    navigate('/');
  };

  return (
    <div className="form__container">
      <form onSubmit={onHadleSubmit} className="form__add-animal">
        <label className="form__label">
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </label>
        <label className="form__label">
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
        </label>
        <button type="submit">Зайти папке для лапке</button>
      </form>
    </div>
  );
}

export default Authorization;
