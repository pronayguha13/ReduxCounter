export const incrementTimer = (timeUnit) => {
  return {
    type: "INCREMENT",
    payload: timeUnit,
  };
};

export const decrementTimer = (timeUnit) => {
  return {
    type: "DECREMENT",
    payload: timeUnit,
  };
};
export const startTimer = () => {
  return {
    type: "START_TIMER",
    payload: true,
  };
};

export const stopTimer = () => {
  return {
    type: "STOP_TIMER",
    payload: 0,
  };
};
export const endTimer = () => {
  return {
    type: "END_TIMER",
    payload: false,
  };
};
export const setLastTimer = () => {
  return {
    type: "SET_LAST_TIMER",
    payload: 0,
  };
};

export const resetTimer = () => {
  return {
    type: "RESET_TIMER",
    payload: null,
  };
};

export const setTimer = (newTimer) => {
  return {
    type: "SET_TIMER",
    payload: newTimer,
  };
};
export const pauseTimer = () => {
  return {
    type: "PAUSE_TIMER",
    payload: null,
  };
};
