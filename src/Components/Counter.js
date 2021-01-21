import React from "react";
import style from "./Counter.module.css";

const Counter = (props) => {
  console.log("🚀 ~ file: Counter.js ~ line 5 ~ Counter ~ props", props);
  return (
    <div className={style.DisplayPanel}>
      <p className={style.CountdownTime}>{props.counterTimer}</p>
    </div>
  );
};

export default Counter;
