import React, { useContext } from 'react';
import AnimalItem from './AnimalItem';
import './styles/Animal.css';
import StateContext from '../../context';
import FormAddAnimal from './FormAddAnimal';

function AnimalsList(): JSX.Element {
  const { state } = useContext(StateContext);

  return (
    <div>
      <FormAddAnimal />
      {state.animals.map((animal) => (
        <AnimalItem key={animal.id} animal={animal} />
      ))}
    </div>
  );
}

export default AnimalsList;
