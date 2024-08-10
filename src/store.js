import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './features/boardSlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

export default store;
