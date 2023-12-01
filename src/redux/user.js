import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    userToken: null,
    userData: null,
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        isLogin: true,
        userToken: action.payload.userToken,
        userData: action.payload.userData,
      };
    },
    clearUser: (state) => {
      return {
        ...state,
        isLogin: false,
        userToken: null,
        userData: null,
      };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
