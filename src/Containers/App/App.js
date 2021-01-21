import styles from "./App.module.css";

//Component import
import Counter from "../../Components/Counter";
import Controller from "../../Containers/Controller/Controller";
import { shallowEqual, useSelector } from "react-redux";
//
const App = () => {
  const counterTimer = useSelector((state) => state.counterTimer, shallowEqual);
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ counterTimer", counterTimer);
  return (
    <div className={styles.App}>
      <Counter counterTimer={counterTimer} />
      <Controller />
    </div>
  );
};

export default App;
