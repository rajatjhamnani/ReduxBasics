import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increaseCounter: (state, action) => {
      state.counter += action.payload;
    },
    increaseCounterByTwo: (state, action) => {
      state.counter += action.payload;
    },
    decreaseCounter: (state, action) => {
      state.counter -= action.payload;
    },
    toggle: (state, action) => {
      state.showCounter = action.payload;
    },
  },
});
const initialAuthState = {
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const {
  increaseCounter,
  decreaseCounter,
  increaseCounterByTwo,
  toggle,
} = counterSlice.actions;
export default counterSlice.reducer;
