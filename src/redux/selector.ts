import type { RootState } from "./store";

export const selectMenuIsOpen = (state: RootState) =>
    state.globalReducer.menuIsOpen;
//Product
export const selectProductDetail = (state: RootState) =>
    state.productReducer.productDetail;
