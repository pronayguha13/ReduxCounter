const CounterReducer = (
  state = {
    counterTimer: 0,
    isCounting: false,
    lastTimer: 5,
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      state = { ...state, counterTimer: state.counterTimer + action.payload };
      break;
    case "DECREMENT":
      if (state.counterTimer - action.payload >= 0) {
        state = { ...state, counterTimer: state.counterTimer - action.payload };
      }
      break;
    case "START_TIMER":
      if (state.counterTimer - action.payload >= 0) {
        state = {
          ...state,
          counterTimer: state.counterTimer - 1,
          isCounting: true,
        };
      }
      break;
    case "END_TIMER":
      state = { ...state, isCounting: false };
      break;
    case "STOP_TIMER":
      state = { ...state, counterTimer: 0, isCounting: false };
      break;
    case "SET_LAST_TIMER":
      state = { ...state, lastTimer: state.counterTimer };
      break;
    case "RESET_TIMER":
      state = { ...state, counterTimer: state.lastTimer };
      break;
    case "SET_TIMER":
      state = {
        ...state,
        counterTimer: action.payload,
        isCounting: true,
        lastTimer: action.payload,
      };
      break;
    case "PAUSE_TIMER":
      state = { ...state, isCounting: false };
      break;
    default:
      break;
  }
  return state;
};

export default CounterReducer;
