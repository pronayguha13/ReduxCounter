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
