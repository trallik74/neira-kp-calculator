import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setHotel: (state, action) => {
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
          quantity: 1,
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
  },
});

export const { reducer: orderReducer, actions: orderAction } = orderSlice;
