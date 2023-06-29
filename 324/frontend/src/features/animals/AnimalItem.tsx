import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Animal, AnimalId } from './types/Animal';
import { useAppDispatch } from '../../redux/store';
import { deleteAnimal } from './animalsSlice';

function AnimalItem({ animal }: { animal: Animal }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleRemove = (value: AnimalId): void => {
    dispatch(deleteAnimal(value));
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
