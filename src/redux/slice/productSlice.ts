import * as interfaceGlobal from "../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ProductState {
    productDetail: interfaceGlobal.Product | null;
    cartPizza: interfaceGlobal.ProductCart[];
    productId: number;
}

const initProduct: ProductState = {
    productDetail: null,
    cartPizza: [],
    productId: 0,
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

        setProductId(state: ProductState, actions: PayloadAction<number>) {
            state.productId = actions.payload;
        },

        setProductCart(
            state: ProductState,
            actions: PayloadAction<interfaceGlobal.ProductCart>
        ) {
            //If cart already product => update quantity
            if (
                state.cartPizza?.find(
                    (item) => item.id === actions.payload.id
                ) &&
                state.cartPizza?.find(
                    (item) => item.size === actions.payload.size
                )
            ) {
                state.cartPizza = state.cartPizza.map((product) => {
                    if (product.id === actions.payload.id) {
                        return {
                            ...product,
                            quantity:
                                product.quantity + actions.payload.quantity,
                        };
                    } else {
                        return product;
                    }
                });
            } else {
                state.cartPizza.push(actions.payload);
            }
        },

        updateCart(
            state: ProductState,
            actions: PayloadAction<interfaceGlobal.ProductCart>
        ) {
            state.cartPizza = state.cartPizza.map((product) => {
                if (product.id === actions.payload.id) {
                    return {
                        ...product,
                        quantity: actions.payload.quantity,
                    };
                } else {
                    return product;
                }
            });
        },

        removeProductCart(
            state: ProductState,
            actions: PayloadAction<interfaceGlobal.ProductCart>
        ) {
            state.cartPizza = state.cartPizza.filter((product) => {
                if (
                    product.id === actions.payload.id &&
                    product.size === actions.payload.size
                ) {
                    return false;
                } else {
                    return true;
                }
            });
        },
    },
});

export const {
    setProductDetail,
    setProductId,
    setProductCart,
    updateCart,
    removeProductCart,
} = product.actions;
export default product.reducer;
