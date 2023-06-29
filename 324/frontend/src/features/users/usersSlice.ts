/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersState } from '../animals/types/State';
import * as api from '../../App/api';

const initialState: UsersState = {
  users: [],
  error: undefined,
};

export const loadUsers = createAsyncThunk('users/loadUsers', () => api.loadUsersFetch());

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;

// export function usersReducer(state: UsersState = initialState, action: Action): UsersState {
//   switch (action.type) {
//     case 'users/load':
//       return {
//         ...state,
//         users: action.payload,
//       };
//     case 'users/DIE':
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.payload),
//       };
//     case 'users/changeAdminStatus':
//       return {
//         ...state,
//         users: state.users.map((user) => {
//           if (user.id === action.payload) {
//             return { ...user, isAdmin: !user.isAdmin };
//           }
//           return user;
//         }),
//       };
//     default:
//       return state;
//   }
// }
