import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as globalInterface from "../../types/index";
export interface GlobalState {
    menuIsOpen: boolean;
    modalOpen: boolean;
    searchIsOpen: boolean;
    loading: boolean;
    popupNotification: globalInterface.PopupNotification;
}

const initialState: GlobalState = {
    menuIsOpen: false,
    modalOpen: false,
    searchIsOpen: false,
    loading: false,
    popupNotification: {
        action: "",
        isOpen: false,
        mainTitle: "",
        title: "",
    },
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

        setSearchOpen(state: GlobalState) {
            state.searchIsOpen = true;
        },

        setSearchClose(state: GlobalState) {
            state.searchIsOpen = false;
        },

        setLoadingRequest(state: GlobalState) {
            state.loading = true;
        },
        setLoadingResponse(state: GlobalState) {
            state.loading = false;
        },

        setPopupNotification(
            state: GlobalState,
            actions: PayloadAction<globalInterface.PopupNotification>
        ) {
            state.popupNotification = actions.payload;
        },
    },
});

export const {
    setMenuClose,
    setMenuOpen,
    setModalOpen,
    setModalClose,
    setSearchOpen,
    setSearchClose,
    setLoadingRequest,
    setLoadingResponse,
    setPopupNotification,
} = globalSlice.actions;

export default globalSlice.reducer;
