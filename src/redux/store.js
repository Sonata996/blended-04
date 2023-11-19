import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from 'redux/todosSlice';

export const store = configureStore({
  reducer: todosReducer,
});

