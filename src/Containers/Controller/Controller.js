import React from "react";
import style from "./Controller.module.css";

const Controller = () => {
  return (
    <div className={style.Controller}>
      <div>
        <button className={`${style.AddSubstractTimerButton} btn`}>-5</button>
        <input
          type="number"
          min="0"
          step="5"
          className={style.InputTime}
          placeholder="Enter your time"
        />
        <button className={`${style.AddSubstractTimerButton} btn`}>+5</button>
      </div>
      <button className={`${style.PlayButton} btn`}>
        <img src="/image/play.png" alt="Start" style={{ height: 35 }} />
      </button>
      <div className={style.StopResetContainer}>
        <button className={`${style.StopButton} btn`}>
          <img src="/image/stop-button.png" alt="Stop" />
        </button>
        <button className={`${style.ResetButton} btn`}>
          <img src="/image/reset.png" alt="Reset" />
        </button>
      </div>
    </div>
  );
};

export default Controller;
