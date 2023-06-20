import React, { useContext } from 'react';
import { Animal, AnimalId } from './types/Animal';
import StateContext from '../../context';

function AnimalItem({ animal }: { animal: Animal }): JSX.Element {
  const { dispatch } = useContext(StateContext);

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
    <div className="animal__item">
      <h2>{animal.name}</h2>
      <img src={animal.image} alt="animal" />
      <button onClick={() => onHandleRemove(animal.id)} type="button">
        remove
      </button>
    </div>
  );
}

export default AnimalItem;
