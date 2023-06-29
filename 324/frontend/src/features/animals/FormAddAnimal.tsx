import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addAnimal } from './animalsSlice';

function FormAddAnimal(): JSX.Element {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(addAnimal({ name, image }));
    setImage('');
    setName('');
  };

  return (
    <div className="form__container">
      <form className="form__add-animal" onSubmit={onHandleSubmit}>
        <label className="form__label">
          Имя лапочки
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <label className="form__label">
          Фото лапочки
          <input value={image} onChange={(e) => setImage(e.target.value)} type="text" />
        </label>
        <button type="submit">Добавить лапочку</button>
      </form>
    </div>
  );
}

export default FormAddAnimal;
