
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from './../pages/Login';
import Register from '../pages/Register';
import CreateProduct from '../pages/admin/CreateProduct';
import ProductInfo from '../pages/admin/ProductInfo';
import { useSelector } from 'react-redux';
import UserProfile from '../pages/admin/UserProfile';
import PageNotFound from './../PageNotFound';
import AuthWrapper from './AuthWrapper';
import Cart from '../pages/Cart';







const MainRoutes = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <Routes>
      <Route path='/' element={<Products />} />


      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />



      <Route path='/admin/userProfile' element={

        <UserProfile />

      } />
      <Route path='/admin/create-product' element={
        <AuthWrapper>
          <CreateProduct />
        </AuthWrapper>} />

      <Route path='/cart' element={<Cart />} />

      <Route path='/product/:id' element={
        <ProductInfo />
      } />




      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default MainRoutes