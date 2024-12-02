import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice.js"
import productReducer from "./Slices/productSlice.js"
import { apiSlice } from "./Slices/ApiSlice.js";

const store = configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      product: productReducer,
      cartItem:cartReducer,
      },
      middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        apiSlice.middleware,
      ],
 })
 export {store}