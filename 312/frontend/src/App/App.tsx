/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import AnimalsList from '../features/animals/AnimalsList';
import { State } from '../features/animals/types/State';
import reducer from '../reducer';
import StateContext from '../context';
import UsersList from '../features/users/UsersList';

const initialState: State = {
  animals: [],
  users: [],
};

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentPage, setCurrentPage] = useState('');
  // const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    fetch('/api/animals')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'animals/load', payload: data }));
  }, []);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'users/load', payload: data }));
  }, []);

  // useEffect(() => {
  //   fetch('/api/animals')
  //     .then((res) => res.json())
  //     .then((data) => setAnimals(data));
  // }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <button type="button" onClick={() => setCurrentPage('animals')}>
        Animals
      </button>
      <button type="button" onClick={() => setCurrentPage('users')}>
        Users
      </button>
      <div className="App">
        {currentPage === 'animals' && (
          <>
            <h1>Animals</h1>
            <AnimalsList />
          </>
        )}
        {currentPage === 'users' && (
          <>
            <h1>Users</h1>
            <UsersList />
          </>
        )}
      </div>
    </StateContext.Provider>
  );
}

export default App;
