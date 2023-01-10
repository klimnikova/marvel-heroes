import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Heroes } from '../../api/heroes/types';

const initialState: Heroes = [];

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<Heroes>) => {
      return [...action.payload];
    },
    addHeroes: (state, action: PayloadAction<Heroes>) => {
      return [...action.payload, ...state];
    },
  },
});

export const { addHeroes, setHeroes } = heroesSlice.actions;
