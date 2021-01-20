import React from "react";
import style from "./Counter.module.css";

const Counter = (props) => {
  return (
    <div className={style.DisplayPanel}>
      <p className={style.CountdownTime}>00:00</p>
    </div>
  );
};

export default Counter;
