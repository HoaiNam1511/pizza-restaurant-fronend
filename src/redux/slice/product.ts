import * as interfaceGlobal from "../../types/index";
import {} from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
    productDetail: interfaceGlobal.Product | null;
}

const initProduct: ProductState = {
    productDetail: null,
};

const product = createSlice({
    name: "product",
    initialState: initProduct,
    reducers: {
        setProductDetail(
            state: ProductState,
            actions: PayloadAction<interfaceGlobal.Product>
        ) {
            state.productDetail = actions.payload;
        },
    },
});

export const { setProductDetail } = product.actions;
export default product.reducer;
