import { configureStore } from '@reduxjs/toolkit';

import { heroesSlice } from './slices';

const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
