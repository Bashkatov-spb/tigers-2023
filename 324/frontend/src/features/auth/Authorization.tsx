import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { authorization } from './authSlice';

function Authorization(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onHadleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(authorization({ email, password }));
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
