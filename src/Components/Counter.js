import React from "react";
import style from "./Counter.module.css";

const Counter = ({ counterTimer }) => {
  const updateDisplayPanel = (counterTimer) => {
    let second = counterTimer % 60;
    let minute = parseInt(counterTimer / 60);

    if (minute === 0) {
      minute = "00";
    } else if (minute >= 1 && minute <= 9) {
      minute = "0" + minute.toString();
    }

    if (second === 0) {
      second = "00";
    } else if (second >= 1 && second <= 9) {
      second = "0" + second.toString();
    }
    let timer = minute + ":" + second;
    return timer;
  };

  return (
    <div className={style.DisplayPanel}>
      <p className={style.CountdownTime}>
        {counterTimer === 0 ? "00 : 00" : updateDisplayPanel(counterTimer)}
      </p>
    </div>
  );
};

export default Counter;
