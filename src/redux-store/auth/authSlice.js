import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
   user: { nickName: null, email: null },
   token: null,
   isLoggedIn: false,
   isRefreshing: false,
   error: null,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   extraReducers: {
      [register.fulfilled](state, action) {
         state.user = action.payload.user;
         state.token = action.payload.token;
         state.isRefreshing = false;
         state.isLoggedIn = true;
      },
      [register.pending](state) {
         state.isRefreshing = true;
      },
      [register.rejected](state, action) {
         state.error = action.message;
         state.isRefreshing = false;
      },
      [logIn.fulfilled](state, action) {
         state.user.nickName = action.payload.nickName;
         state.user.email = action.payload.email;
         state.token = action.payload.token;
         state.isRefreshing = false;
         state.isLoggedIn = true;
      },
      [logIn.pending](state) {
         state.isRefreshing = true;
      },
      [logIn.rejected](state, action) {
         state.error = action.payload.message;
         state.isRefreshing = false;
      },
      [logOut.fulfilled](state) {
         state.user = { name: null, email: null };
         state.token = null;
         state.isLoggedIn = false;
      },
      [refreshUser.pending](state) {
         state.isRefreshing = true;
      },
      [refreshUser.fulfilled](state, action) {
         state.user = action.payload;
         state.isLoggedIn = true;
         state.isRefreshing = false;
      },
      [refreshUser.rejected](state) {
         state.isRefreshing = false;
      },
   },
});

export const authReducer = authSlice.reducer;
