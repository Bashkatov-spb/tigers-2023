import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AnimalsList from '../features/animals/AnimalsList';
import UsersList from '../features/users/UsersList';
import Navigation from '../features/navigation/Navigation';
import MainPage from '../features/main/MainPage';
import Error from '../features/404/Error';
import AnimalPage from '../features/animals/AnimalPage';
import Registration from '../features/auth/Registration';
import Authorization from '../features/auth/Authorization';
import { useAppDispatch } from '../redux/store';
import { loadAnimals } from '../features/animals/animalsSlice';
import { loadUsers } from '../features/users/usersSlice';
import { authCheckUser } from '../features/auth/authSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAnimals());
    dispatch(loadUsers());
    dispatch(authCheckUser());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/animals" element={<AnimalsList />} />
          <Route path="/animals/:animalId" element={<AnimalPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
