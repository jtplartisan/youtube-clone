import { createSlice } from "@reduxjs/toolkit";
const initialState={
    play:[]
};
export const urlSlice=createSlice({
 
    play:"urlplay",
    initialState,
    reducers:{
        play:(state,action)=>{
            state.play=action.payload;
        }
    }
})
export const {play} = urlSlice.actions;
export const selectPlay=(state)=>state.url.play;
export default urlSlice.reducer;