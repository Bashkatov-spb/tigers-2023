import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearError, registration } from './authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

function Registration(): JSX.Element {
  const { error, user } = useAppSelector((store) => store.auth);
  console.log(error);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onHadleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(registration({ name, email, password, cpassword }));
  };

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    dispatch(clearError());
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="form__container">
      {error && <span style={{ fontSize: '25px', color: 'red' }}>{error}</span>}
      <form onSubmit={onHadleSubmit} className="form__add-animal">
        <label className="form__label">
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <label className="form__label">
          Email
          <input value={email} onChange={handleChangeEmail} type="text" />
        </label>
        <label className="form__label">
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
        </label>
        <label className="form__label">
          Confirm password
          <input value={cpassword} onChange={(e) => setCpassword(e.target.value)} type="text" />
        </label>
        <button type="submit">Добавить папочку для лапочки</button>
      </form>
    </div>
  );
}

export default Registration;
