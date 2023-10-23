import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: () => {},
  },
});

// --- export action ---
export const { increment } = counterSlice.actions;

// --- export reducer ---
export default counterSlice.reducer;
