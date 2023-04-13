import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
    menuIsOpen: boolean;
}

const initialState: GlobalState = {
    menuIsOpen: false,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMenuOpen(state: GlobalState) {
            state.menuIsOpen = true;
        },

        setMenuClose(state: GlobalState) {
            state.menuIsOpen = false;
        },
    },
});

export const { setMenuClose, setMenuOpen } = globalSlice.actions;

export default globalSlice.reducer;
