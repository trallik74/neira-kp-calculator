import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { reducer: orderReducer, actions: orderAction } = orderSlice;
