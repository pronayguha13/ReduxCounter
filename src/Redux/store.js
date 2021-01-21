import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import CounterReducer from "./reducers/CounterReducer";

const store = createStore(
  CounterReducer,
  { counterTimer: 0 },
  applyMiddleware(logger)
);

export default store;
