//Component import
import styles from "./App.module.css";
import Counter from "../../Components/Counter";
import Controller from "../../Containers/Controller/Controller";
import { shallowEqual, useSelector } from "react-redux";
// import { decrementTimer } from "../../Redux/actions/CounterActions";
//
const App = () => {
  const counterTimer = useSelector((state) => state.counterTimer, shallowEqual);
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ counterTimer", counterTimer);
  // const dispatch = useDispatch();

  // const updateTimer = () => {
  //   while (counterTimer > 0) {
  //     setTimeout(() => {
  //       dispatch(decrementTimer(1));
  //     }, 1000);
  //   }
  //   clearTimeout();
  // };
  return (
    <div className={styles.App}>
      <Counter counterTimer={counterTimer} />
      <Controller />
    </div>
  );
};

export default App;
