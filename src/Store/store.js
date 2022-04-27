import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
<<<<<<< HEAD
import playListReducer from '../reducer/reducer';
=======
import playListReducer from '../reducer/reducer'
>>>>>>> eb90263731b21eeb05edbf8c0f79303f546e9597
=======
import playListReducer from '../reducer/reducer';
>>>>>>> e33d78c483d09e3dfe0e37ff329f6fb9e75f8bb2

export const store = configureStore({
  reducer: {
    playlist: playListReducer
  }
});
