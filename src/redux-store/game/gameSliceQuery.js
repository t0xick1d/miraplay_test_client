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
   activeItem: 'ALL',
   page: 1,
   isFreshGamesFirst: false,
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
      updateNewSwitch: (state) => {
         console.log(!state.changeNew);
         state.isFreshGamesFirst = !state.isFreshGamesFirst;
      },
   },
});

export const { setActiveItem, updatePage, updateNewSwitch } = gameSlice.actions;
export default gameSlice.reducer;
