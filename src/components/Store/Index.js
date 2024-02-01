import { legacy_createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type === "INCREMENT2") {
    return {
      counter: state.counter + 2,
    };
  } else if (action.type === "DECREMENT2") {
    return {
      counter: state.counter - 2,
    };
  }
  return state;
};

const store = redux.legacy_createStore(counterReducer);
export default store;
