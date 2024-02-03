import classes from "./Counter.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
  increaseCounterByTwo,
  toggle,
} from "./Store/Pointer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(increaseCounter(5));
  };
  const incrementHandler2 = () => {
    dispatch(increaseCounterByTwo(2));
  };
  const decrementHandler = () => {
    dispatch(decreaseCounter(5));
  };
  const toggleCounterHandler = () => {
    dispatch(toggle(!showCounter));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT BY 5</button>
        <button onClick={incrementHandler2}>INCREMENT BY 2</button>
        <button onClick={decrementHandler}>DECREMENT BY 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
