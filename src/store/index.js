import { configureStore } from "@reduxjs/toolkit";
import { selectValuesReducer, orderReducer, userReducer } from "./slices";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    selectValues: selectValuesReducer,
    user: userReducer,
  },
});
