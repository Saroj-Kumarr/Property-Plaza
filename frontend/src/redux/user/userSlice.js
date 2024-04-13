import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },

    updateUser: (state, action) => {
      state.currentUser = action.payload;
    },

    deleteUser: (state) => {
      state.currentUser = null;
    },

    signOutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, updateUser, deleteUser, signOutUser } =
  userSlice.actions;

export default userSlice.reducer;
