import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const selectValuesSlice = createSlice({
  name: "selectValues",
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

export const { reducer: selectValuesReducer, actions: selectValuesAction } =
selectValuesSlice;
