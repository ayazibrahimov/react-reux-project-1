import { useDispatch ,useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';



const Counter = () => {
  
  const dispatch = useDispatch()
  const state = useSelector(state =>state.counter.count )
  const showData = useSelector(state=>state.counter.showCounter)


  const increaseHandler = () =>{
     dispatch(counterActions.increment())
  }
 
  const decreaseHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseFiveHandler = () => {
    dispatch(counterActions.incrementByFive(5))
  }
 
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
     {showData && <div className={classes.value}>{state}</div>}
      <div>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={decreaseHandler}>decrease 100</button>
        <button onClick={increaseFiveHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
