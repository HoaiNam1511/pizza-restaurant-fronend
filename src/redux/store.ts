import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice/globalSlice";

export const store = configureStore({
    reducer: {
        globalReducer: globalSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
