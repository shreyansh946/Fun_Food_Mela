import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//configuring the redux store
const AppStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default AppStore;