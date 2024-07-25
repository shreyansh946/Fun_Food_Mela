import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action) =>{
                state.items.push(action.payload);
        },
            removeItem:(state) =>{
                state.items.pop(); 
            },
            clearcart:(state) =>{
                //state.items.length = 0;
                return {items: []};
                
            }
    }
})

export const {addItem,removeItem,clearcart} =cartSlice.actions;


export default cartSlice.reducer;