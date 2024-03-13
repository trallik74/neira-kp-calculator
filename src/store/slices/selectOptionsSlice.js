import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const selectOptionSlice = createSlice({
  name: "selectOption",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    removeValue: (state, action) => {
      delete state[action.payload.name];
    },
    setError: (state, action) => {
      state[`${action.payload.name}-error`] = action.payload.error;
    },
    removeError: (state, action) => {
      delete state[`${action.payload.name}-error`];
    },
  },
});

export const { reducer: selectOptionReducer, actions: selectOptionAction } =
  selectOptionSlice;
