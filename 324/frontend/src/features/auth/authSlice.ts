import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAuthLog, UserAuthReg } from '../users/types/User';
import { AuthState } from './types/AuthState';
import * as api from '../../App/api';

const initialState: AuthState = {
  user: undefined,
  error: undefined,
};

export const registration = createAsyncThunk('auth/registration', (value: UserAuthReg) =>
  api.registrationFetch(value)
);

export const authorization = createAsyncThunk('auth/authorization', (value: UserAuthLog) =>
  api.authorizationFetch(value)
);

export const authCheckUser = createAsyncThunk('auth/checkUser', () => api.authCheckUserFetch());

export const logOut = createAsyncThunk('auth/logout', () => api.logOutFetch());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(authorization.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authorization.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(authCheckUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authCheckUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
// const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
//   switch (action.type) {
//     case 'auth/reg':
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case 'auth/log':
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case 'auth/check':
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case 'auth/logout':
//       return {
//         ...state,
//         user: undefined,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
