import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import productSlice from "./slices/productSlice";

export const store =  configureStore({
  reducer:{
    sliderSlice,
    productSlice,
  }
})