import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import animalsSlice from '../features/animals/animalsSlice';
import usersSlice from '../features/users/usersSlice';
import authSlice from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    animals: animalsSlice,
    users: usersSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(fn: (state: RootState) => T) => T = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export default store;
