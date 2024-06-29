import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import  {authActions}  from '../store/counterStoreToolkit';


const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  
  function handleLogout(){
  dispatch(authActions.logout()) 
 }
  return (
    <header className={classes.header}>
      <h1>LOGIN APP</h1>
      <nav>
        <ul>
          <li>
          {isAuthenticated && <button onClick={handleLogout}>Logout</button>}  
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
