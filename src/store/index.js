import { configureStore } from "@reduxjs/toolkit";
import { selectValuesReducer, orderReducer } from "./slices";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    selectValues: selectValuesReducer,
  },
});
