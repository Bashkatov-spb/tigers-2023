/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AnimalsState } from './types/State';
import * as api from '../../App/api';
import { Animal, AnimalId, AnimalWithOutId } from './types/Animal';

const initialState: AnimalsState = {
  animals: [],
  error: undefined,
};

export const loadAnimals = createAsyncThunk('animals/load', () => api.loadAnimalsFetch());

export const deleteAnimal = createAsyncThunk('animals/delete', (value: AnimalId) =>
  api.deleteAnimalFetch(value)
);

export const addAnimal = createAsyncThunk('animals/add', (animal: AnimalWithOutId) =>
  api.addAnimalFetch(animal)
);

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAnimals.fulfilled, (state, action) => {
        state.animals = action.payload;
      })
      .addCase(loadAnimals.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteAnimal.fulfilled, (state, action) => {
        state.animals = state.animals.filter((animal) => animal.id !== +action.payload);
      })
      .addCase(deleteAnimal.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addAnimal.fulfilled, (state, action) => {
        state.animals.push(action.payload);
      })
      .addCase(addAnimal.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default animalsSlice.reducer;

// export function animalsReducer(state: AnimalsState = initialState, action: Action): AnimalsState {
//   switch (action.type) {
//     case 'animals/load':
//       return {
//         ...state,
//         animals: action.payload,
//       };
//     case 'animals/remove':
//       return {
//         ...state,
//         animals: state.animals.filter((animal) => animal.id !== action.payload),
//       };
//     case 'animals/add':
//       return {
//         ...state,
//         animals: [...state.animals, action.payload],
//       };
//     default:
//       return state;
//   }
// }
