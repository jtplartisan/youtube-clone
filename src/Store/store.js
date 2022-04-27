import { configureStore } from "@reduxjs/toolkit";
import urlPlay from '../reducer/reducer'
export const store = configureStore({
   
    reducerplay:{
        play:urlPlay
      }
  });