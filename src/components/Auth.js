import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux'
import {authActions} from '../store/auth'

const Auth = () => {


  const dispatch = useDispatch()


  const isLogIn = useSelector(state => state.auth.auth)
 

  const isLoginHandler=(e)=>{
    
    e.preventDefault() 

    dispatch(authActions.logInDatas())
  
  }



  return (
  <div>
     { !isLogIn &&  <main className={classes.auth}>
      <section>
        
           <form onSubmit={isLoginHandler}>
           <div className={classes.control}>
             <label htmlFor='email'>Email</label>
             <input type='email' id='email' />
           </div>
           <div className={classes.control}>
             <label htmlFor='password'>Password</label>
             <input type='password' id='password' />
           </div>
           <button>Login</button>
         </form>
  
       
      </section>
    </main>}
  </div>
  );
};

export default Auth;
