import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, actions) {
      const newItem = actions.payload;
      state.totalAmount = state.totalAmount + newItem.amount;
      state.totalPrice = state.totalPrice + newItem.price * newItem.amount;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          images: newItem.images,
          amount: newItem.amount,
          price: newItem.price,
        });
      } else {
        existingItem.amount = existingItem.amount + newItem.amount;
      }
    },
    removeItemToCart(state, actions) {
      state.totalAmount--;
      const existingItem = state.items.find(
        (item) => item.id === actions.payload
      );
      state.totalPrice = state.totalPrice - existingItem.price;
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== actions.payload);
      } else {
        existingItem.amount--
      }
    },
  },
});

export default cartSlice;
