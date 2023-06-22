import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Animal, AnimalId } from './types/Animal';

function AnimalItem({ animal }: { animal: Animal }): JSX.Element {
  const dispatch = useDispatch();

  const onHandleRemove = async (value: AnimalId): Promise<void> => {
    const res = await fetch(`/api/animals/${value}`, {
      method: 'DELETE',
    });
    const data = await res.json();

    if (data.message === 'success') {
      dispatch({ type: 'animals/remove', payload: value });
    }
  };
  return (
    <div className="animals__item">
      <h2>{animal.name}</h2>
      <img src={animal.image} alt="animal" />
      <button onClick={() => onHandleRemove(animal.id)} type="button">
        Убрать лапочку
      </button>
      <button type="button">
        <Link to={`/animals/${animal.id}`}>Посмотреть лапочку</Link>
      </button>
      <button type="button">Изменить лапочку</button>
    </div>
  );
}

export default memo(AnimalItem);
