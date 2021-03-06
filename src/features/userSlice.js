//
import {createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  //function to update our state or update our redux state
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//actions
export const { login, logout } = userSlice.actions;
//state using the hook to grab the data from redux
//look at the tree diagram in redux developer tools
export const selectUser = (state) =>  state.user.user;
//reducer
export default userSlice.reducer;