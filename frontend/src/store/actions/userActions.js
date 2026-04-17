import axios from "../../api/axiosConfig"
import { laodUser, removeUser } from "../reducers/userSlice";


//! CURRENT USER  

export const asyncCurrentUser = () => async (dispatch) => {
   try {
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
        dispatch(laodUser(user));
    }
    else{
        console.log('User not Loggedin')
    }


   } catch (error) {
    console.log(error)
   }
}


//! LOG IN 
export const asyncLoginUser = (user) => async (dispatch) => {
    try {
        
        const {data} = await axios.get(`/users?email=${user.email}`);
       
        localStorage.setItem("user",JSON.stringify(data[0]));

        dispatch(asyncCurrentUser())
    } catch (error) {
        throw error
    }
}

//! LOG OUT 
export const asyncLogOutUser = (user) => async (dispatch) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeUser())
    } catch (error) {
        throw error
    }
}

export const asyncRegister = (user) => async (dispatch) => {
    try {
        const res = await axios.post('/users', user);

        dispatch(asyncCurrentUser());

    } catch (error) {
        throw error
    }
}


//! UPDATE USER 
 export const asyncUpdateUser = (id,user) => async (dispatch) => {
    try {
        const {data} = await axios.patch('/users/'+id, user);

        console.log(data)

        localStorage.setItem("user",JSON.stringify(data));

        dispatch(asyncCurrentUser())
        
    } catch (error) {
        throw error
    }
}

//! DELETE USER
export const asyncDeleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete('/users/'+id);

        dispatch(asyncLogOutUser())
        
    } catch (error) {
        throw error
    }
}