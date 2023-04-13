import type { RootState } from "./store";

export const selectMenuIsOpen = (state: RootState) =>
    state.globalReducer.menuIsOpen;
