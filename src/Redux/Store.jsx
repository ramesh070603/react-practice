import { configureStore } from "@reduxjs/toolkit";
import cartOper from "../Features/Cart/cartslice"
export default configureStore({
    reducer:{
        cart:cartOper
    }
    
})