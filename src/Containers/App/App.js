//Component import
import styles from "./App.module.css";
import Counter from "../../Components/Counter";
import Controller from "../../Containers/Controller/Controller";
import { shallowEqual, useSelector } from "react-redux";
//
const App = () => {
  const counterTimer = useSelector((state) => state.counterTimer, shallowEqual);
  return (
    <div className={styles.App}>
      <Counter counterTimer={counterTimer} />
      <Controller />
    </div>
  );
};

export default App;
