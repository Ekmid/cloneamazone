import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CartState {
    cart:any
}

const initialState:CartState = {
    cart:[]
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers:{
        //multiply actions
        addToCart:(state, action) => {
            state.cart.push(action.payload);
        }
    },
});

export const {addToCart} = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart

export default cartSlice.reducer;