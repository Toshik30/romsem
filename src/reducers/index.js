import { configureStore } from "@reduxjs/toolkit";
import menuSlice  from './slices/menuSlice'
import paymentSlice from "./slices/paymentSlice";

export default configureStore({
    reducer: {
        menu: menuSlice,
        payment: paymentSlice,  
    }
})