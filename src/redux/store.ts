import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice/globalSlice";
import productSlice from "./slice/product";

export const store = configureStore({
    reducer: {
        globalReducer: globalSlice,
        productReducer: productSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
