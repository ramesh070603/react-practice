import { createSlice } from "@reduxjs/toolkit";

let cartData = JSON.parse(localStorage.getItem('cart')) || []

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartData,

    reducers: {

        ADDTOCART: (state, action) => {
            let item = action.payload
            let exitingItem = state.find(cartData => cartData.id === item.id)

            if (exitingItem) {
                exitingItem.quantity+=1
            } else {
                state.push(item)
            }
            localStorage.setItem('cart',JSON.stringify(state))
        },

        REMOVEFROMCART: (state,action) => {
            let id = action.payload;
            let updatedCart = state.filter(item => item.id !== id)
            localStorage.setItem('cart',JSON.stringify(updatedCart))
            return updatedCart
        },

        INC: (state, action) => {
            let id = action.payload
            let exitingItem = state.find(item => item.id === id)
            if (exitingItem) exitingItem.quantity += 1
            localStorage.setItem('cart',JSON.stringify(state))
        },
        DEC: (state, action) => {
            let id = action.payload
            let exitingItem = state.find(item => item.id === id)
            if (exitingItem && exitingItem.quantity > 1) {
                exitingItem.quantity -= 1
            }
        }

    }
})

export const { ADDTOCART,REMOVEFROMCART,INC,DEC } = cartSlice.actions
export default cartSlice.reducer

