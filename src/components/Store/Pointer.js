import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCounter: (state, action) => {
      state.counter += action.payload;
    },
    decreaseCounter: (state, action) => {
      state.counter -= action.payload;
    },
  },
});
export const { increaseCounter, decreaseCounter } = counterSlice.actions;
export default counterSlice.reducer;
