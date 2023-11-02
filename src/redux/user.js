import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    userToken: null,
    userData: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.isLogin = true;
      state.userToken = action.payload.userToken;
      state.userData = action.payload.userData;
    },
    clearUser: (state) => {
      state.isLogin = false;
      state.userToken = null;
      state.userData = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
