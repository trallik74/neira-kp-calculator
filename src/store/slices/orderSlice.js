import { createSlice } from "@reduxjs/toolkit";
import { counterSettings } from "../../utils/constant";

const initialState = {
  order: [],
  comissionCost: 0,
  servicesCost: 0,
  totalCost: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setHotelCost: (state, action) => {
      const hotel = state.order.find(
        (item) => item.name === "Аренда помещения"
      );

      if (hotel) {
        hotel.price = action.payload.price;
      } else {
        state.order.push({
          id: 1,
          name: "Аренда помещения",
          price: action.payload.price,
          quantity: counterSettings.MinQuantity,
        });
      }
    },
    setAdditionalService: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      state.order.push({
        id,
        name,
        price,
        quantity,
      });
    },
    removeAdditionalService: (state, action) => {
      state.order = state.order.filter((item) => item.id !== action.payload.id);
    },
    changeServiceQuantity: (state, action) => {
      const service = state.order.find((item) => item.id === action.payload.id);
      if (service) service.quantity = action.payload.quantity;
    },
    setAssestedCost: (state, action) => {
      state.servicesCost = state.order.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.comissionCost = state.servicesCost * action.payload.coefficient;
      state.totalCost = state.servicesCost + state.comissionCost;
    },
  },
});

export const { reducer: orderReducer, actions: orderAction } = orderSlice;
