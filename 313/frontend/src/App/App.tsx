import React, { useEffect, useMemo, useReducer, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AnimalsList from '../features/animals/AnimalsList';
import { State } from '../features/animals/types/State';
import reducer from '../reducer';
import StateContext from '../context';
import UsersList from '../features/users/UsersList';
import Navigation from '../features/navigation/Navigation';
import MainPage from '../features/main/MainPage';
import Error from '../features/404/Error';
import AnimalPage from '../features/animals/AnimalPage';
import MyHeading2 from '../features/memo/MyHeading2';

const initialState: State = {
  animals: [],
  users: [],
};

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentPage, setCurrentPage] = useState('');

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

  const memoStateDispatch = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <StateContext.Provider value={memoStateDispatch}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/animals" element={<AnimalsList />} />
          <Route path="/animals/:animalId" element={<AnimalPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </StateContext.Provider>
  );
}

export default App;
