import { configureStore } from "@reduxjs/toolkit";
import productDataReducer from "../data/productData/productDataSlice";
export const store = configureStore({
  reducer: {
    productData: productDataReducer,
  },
});
