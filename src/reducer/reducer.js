import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  links: ['https://www.youtube.com/embed/uVzT6D-yhZg'],
  play: 'https://www.youtube.com/embed/uVzT6D-yhZg'
};
export const playlistSlice = createSlice({
  name: 'playlist',
  links: ['https://www.youtube.com/embed/uVzT6D-yhZg'],
  play: 'https://www.youtube.com/embed/uVzT6D-yhZg',
  initialState,
  reducers: {
<<<<<<< HEAD
    play: (state, action) => {
      state.play = action.payload;
    }
  }
});
export const {  play } = playlistSlice.actions;
=======
    add: (state, action) => {
      state.links.push(action.payload);
    },
    remove: (state, action) => {
      state.links = state.links.filter((link, index) => index !== action.payload);
    },
    play: (state, action) => {
      const selected = state.links.filter((link, index) => index === action.payload);
      state.play = selected.toString();
    }
  }
});
export const { add, remove, play } = playlistSlice.actions;
>>>>>>> eb90263731b21eeb05edbf8c0f79303f546e9597
export const getPlaylist = (state) => state.playlist.links;
export const getSelectedVideo = (state) => state.playlist.play;

export default playlistSlice.reducer;
