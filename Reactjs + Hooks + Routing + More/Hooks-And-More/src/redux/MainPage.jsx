import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import './mainPage.css';

function MainPage() {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  return (
  <>
  <Header/>
  {!isAuthenticated && <Auth/>}
  {isAuthenticated &&  <Counter />}
  </>
  )
}

export default MainPage;
