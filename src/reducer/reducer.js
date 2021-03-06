import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  links: ['https://www.youtube.com/embed/NpJ6lnbgi_s'],
  play: 'https://www.youtube.com/embed/NpJ6lnbgi_s'
};
export const playlistSlice = createSlice({
  name: 'playlist',
  links: 'playListReducer',
  play: 'playListReducer',
  initialState,
  reducers: {
    play: (state, action) => {
      state.play = action.payload;
    }
  }
});
export const { play } = playlistSlice.actions;
export const getPlaylist = (state) => state.playlist.links;
export const getSelectedVideo = (state) => state.playlist.play;

export default playlistSlice.reducer;
