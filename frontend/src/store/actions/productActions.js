import axios from "../../api/axiosConfig"
import { laodProduct } from "../reducers/productSlice";



export const asyncLoadProduct = () => async (dispatch) => {
   try {
      const { data } = await axios.get('/products');
      dispatch(laodProduct(data))
   } catch (error) {
      throw error
   }
}

//! CREATE PRODUCT

export const asyncCreateProduct = (product) => async (dispatch) => {
   try {
      await axios.post('/products', product);
      dispatch(asyncLoadProduct());

   } catch (error) {
      console.log(error)
   }
}


//! UPDATE PRODUCT

export const asyncUpdateProduct = (id,product) => async (dispatch) => {
   try {
      await axios.patch('/products/' + id,product);
      dispatch(asyncLoadProduct());

   } catch (error) {
      console.log(error)
   }
}

//! DELETE PRODUCT

export const asyncDeleteProduct = (id) => async (dispatch) => {
   try {
      await axios.delete('/products/' + id);
      dispatch(asyncLoadProduct());

   } catch (error) {
      console.log(error)
   }
}
