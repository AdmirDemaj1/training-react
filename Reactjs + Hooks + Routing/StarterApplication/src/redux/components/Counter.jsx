import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { INCREMENT } from '../store/counterStore';
import  {counterActions}  from '../store/counterStoreToolkit';

const Counter = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.number);
    const isDivShown = useSelector((state) => state.isDivShown);
    console.log(number)
    console.log(isDivShown)
    const increaseHandler = () => {
        dispatch(counterActions.increaseByTen(10))
    }
    const increaseNumber = () => {
        dispatch(counterActions.increment())
    }
    const decreaseNumber = () => {
        dispatch(counterActions.decrement())
    }

    const triggerDiv = () => {
      dispatch(counterActions.triggerDivVisibility())
    }
  return (
    <main className={classes.counter}>
      <div className={classes.value}>{number}</div>
     {isDivShown &&  <div className={classes.value}>Hide Me</div>}
      <button onClick={increaseNumber}>Increase Number</button>

      <button onClick={decreaseNumber}>Decrease Number</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={triggerDiv}>{isDivShown ? 'Hide me' : 'Show me'}</button>
    </main>
  );
};

export default Counter;
