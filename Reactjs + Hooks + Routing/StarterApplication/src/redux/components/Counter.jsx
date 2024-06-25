import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.number);
    console.log(number)
    const increaseHandler = () => {
        dispatch({type: "increaseByTen", amount: 10})
    }
    const increaseNumber = () => {
        dispatch({type: "increment"})
    }
    const decreaseNumber = () => {
        dispatch({type: "decrement"})
    }
  return (
    <main className={classes.counter}>
      <div className={classes.value}>{number}</div>
      <button onClick={increaseNumber}>Increase Number</button>

      <button onClick={decreaseNumber}>Decrease Number</button>
      <button onClick={increaseHandler}>Increase by 10</button>
    </main>
  );
};

export default Counter;
