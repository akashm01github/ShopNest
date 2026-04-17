import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        laodUser: (state,action)=>{
            state.users = action.payload
        },
        removeUser: (state,action)=>{
            state.users = null
        }
    }
})



export default userSlice.reducer;


export const {laodUser,removeUser} = userSlice.actions;