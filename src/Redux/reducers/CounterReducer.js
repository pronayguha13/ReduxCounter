const CounterReducer = (
  state = {
    counterTimer: 0,
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      state = { ...state, counterTimer: state.counterTimer + action.payload };
      break;
    case "DECREMENT":
      state = { ...state, counterTimer: state.counterTimer - action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default CounterReducer;
