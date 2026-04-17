import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncCurrentUser } from './store/actions/userActions';
import { asyncLoadProduct } from './store/actions/productActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProduct());
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A2E] px-[5%]">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;