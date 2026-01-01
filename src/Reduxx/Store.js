import { configureStore } from "@reduxjs/toolkit";
import AddToCart from "./CartSlice";

export const Store = configureStore({
  reducer: {
    cart: AddToCart,
  },
});

Store.subscribe(() => {
  const cartItems = Store.getState().cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});
