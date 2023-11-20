import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   genreList: [
      'ALL',
      'FREE',
      'MOBA',
      'SHOOTERS',
      'LAUNCHERS',
      'MMORPG',
      'STRATEGY',
      'FIGHTING',
      'RACING',
      'SURVIVAL',
      'ONLINE',
   ],
   activeItem: 'FREE',
   page: 1,
};

const gameSlice = createSlice({
   name: 'Game',
   initialState,
   reducers: {
      setActiveItem: (state, action) => {
         state.activeItem = action.payload;
      },
      updatePage: (state, action) => {
         state.page = action.payload;
      },
   },
});

export const { setActiveItem, updatePage } = gameSlice.actions;
export default gameSlice.reducer;
