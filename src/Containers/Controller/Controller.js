import React, { useEffect } from "react";
import style from "./Controller.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementTimer,
  incrementTimer,
  startTimer,
  stopTimer,
  endTimer,
  setLastTimer,
  resetTimer,
  setTimer,
  pauseTimer,
} from "../../Redux/actions/CounterActions";

const Controller = () => {
  const isCounting = useSelector((state) => state.isCounting);
  const counterTimer = useSelector((state) => state.counterTimer);
  const dispatch = useDispatch();

  const playButtonHandler = () => {
    dispatch(setLastTimer());
    dispatch(startTimer());
  };

  const resetButtonHandler = () => {
    dispatch(resetTimer());
    dispatch(startTimer());
  };

  const timeInputHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(setTimer(e.target.value));
    }
  };

  useEffect(() => {
    let timer;
    if (isCounting && counterTimer > 0) {
      timer = setInterval(() => {
        dispatch(startTimer());
      }, 1000);
    } else {
      dispatch(endTimer());
    }
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counterTimer, isCounting]);

  return (
    <div className={style.Controller}>
      <div>
        <button
          className={`${style.AddSubstractTimerButton} btn`}
          onClick={() => dispatch(decrementTimer(5))}
        >
          -5
        </button>
        <input
          type="number"
          min="0"
          className={style.InputTime}
          placeholder="Enter your time"
          onKeyDown={(e) => timeInputHandler(e)}
        />
        <button
          className={`${style.AddSubstractTimerButton} btn`}
          onClick={() => dispatch(incrementTimer(5))}
        >
          +5
        </button>
      </div>
      {isCounting ? (
        <button
          className={`${style.PlayButton} btn`}
          onClick={() => dispatch(pauseTimer())}
        >
          <img src="/image/pause.png" alt="Start" style={{ height: 35 }} />
        </button>
      ) : (
        <button
          className={`${style.PlayButton} btn`}
          onClick={() => playButtonHandler()}
        >
          <img src="/image/play.png" alt="Start" style={{ height: 35 }} />
        </button>
      )}
      <div className={style.StopResetContainer}>
        <button
          className={`${style.StopButton} btn`}
          onClick={() => dispatch(stopTimer())}
          disabled={isCounting ? false : true}
        >
          <img src="/image/stop-button.png" alt="Stop" />
        </button>
        <button
          className={`${style.ResetButton} btn`}
          disabled={isCounting ? false : true}
          onClick={() => resetButtonHandler()}
        >
          <img src="/image/reset.png" alt="Reset" />
        </button>
      </div>
    </div>
  );
};

export default Controller;
