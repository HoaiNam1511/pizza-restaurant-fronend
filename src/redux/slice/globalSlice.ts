import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
    menuIsOpen: boolean;
    modalOpen: boolean;
}

const initialState: GlobalState = {
    menuIsOpen: false,
    modalOpen: false,
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

        setModalOpen(state: GlobalState) {
            state.modalOpen = true;
        },

        setModalClose(state: GlobalState) {
            state.modalOpen = false;
        },
    },
});

export const { setMenuClose, setMenuOpen, setModalOpen, setModalClose } =
    globalSlice.actions;

export default globalSlice.reducer;
