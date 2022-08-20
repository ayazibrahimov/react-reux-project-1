import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {authActions} from '../store/auth'

const Header = () => {

const loggedIn = useSelector(state=>state.auth.auth)

const dispatch = useDispatch()

const onLogOutHandler =(e)=>{
   
  e.preventDefault()

  dispatch(authActions.logOutDatas())

 }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {loggedIn && (
         <ul>
         <li>
           <a href='/'>My Products</a>
         </li>
         <li>
           <a href='/'>My Sales</a>
         </li>
         <li>
           <button onClick={onLogOutHandler}>Logout</button>
         </li>
       </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
