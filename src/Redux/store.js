import { createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer";

const store = createStore(CounterReducer, {
  counterTimer: 5,
  isCounting: false,
  lastTimer: 5,
});

export default store;
