import React from 'react';
import AnimalItem from './AnimalItem';
import './styles/Animals.scss';
import FormAddAnimal from './FormAddAnimal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function AnimalsList(): JSX.Element {
  const { animals } = useSelector((store: RootState) => store.animals);
  return (
    <>
      <FormAddAnimal />
      <div className="animals__container container">
        {animals.map((animal) => (
          <AnimalItem key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
}

export default AnimalsList;
