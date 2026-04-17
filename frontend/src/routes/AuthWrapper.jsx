import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';

const AuthWrapper = (props) => {
  const dispatch = useDispatch();

  
  const user = useSelector((state) => state.userReducer.users);

  return user?.isAdmin ? props.children : <Navigate to='/' />
}

export default AuthWrapper