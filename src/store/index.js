import { configureStore } from "@reduxjs/toolkit";
import { selectOptionReducer, orderReducer } from "./slices";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    selectOption: selectOptionReducer,
  },
});
