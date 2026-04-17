import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        laodCart: (state,action)=>{
            state.carts = action.payload
        }
    }
})



export default cartSlice.reducer;


export const {laodCart} = cartSlice.actions;