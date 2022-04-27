import { configureStore } from '@reduxjs/toolkit';
import playListReducer from '../reducer/reducer';

export const store = configureStore({
  reducer: {
    playlist: playListReducer
  }
});
