import React, { useContext } from 'react';
import AnimalItem from './AnimalItem';
import './styles/Animals.scss';
import StateContext from '../../context';
import FormAddAnimal from './FormAddAnimal';

function AnimalsList(): JSX.Element {
  const { state } = useContext(StateContext);

  return (
    <>
      <FormAddAnimal />
      <div className="animals__container container">
        {state.animals.map((animal) => (
          <AnimalItem key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
}

export default AnimalsList;
