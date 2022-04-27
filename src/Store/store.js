import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import playListReducer from '../reducer/reducer';
=======
import playListReducer from '../reducer/reducer'
>>>>>>> eb90263731b21eeb05edbf8c0f79303f546e9597

export const store = configureStore({
  reducer: {
    playlist: playListReducer
  }
});
