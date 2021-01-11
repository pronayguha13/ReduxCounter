import React from "react";
import style from "./Controller.module.css";

const Controller = () => {
  return (
    <div className={style.Controller}>
      <div>
        <button className="btn btn-success">-5</button>
        <input type="number" min="0" className={style.InputTime} />
        <button className="btn btn-success">+5</button>
      </div>
      <button className={`${style.PlayButton} btn btn-primary`}>
        <img src="/image/play.png" alt="Start" style={{ height: 35 }} />
      </button>
      <div className={style.StopResetContainer}>
        <button className={`${style.StopButton} btn btn-danger`}>
          <img src="/image/stop-button.png" alt="Stop" />
        </button>
        <button className={`${style.ResetButton} btn btn-warning`}>
          <img src="/image/reset.png" alt="Reset" />
        </button>
      </div>
    </div>
  );
};

export default Controller;
