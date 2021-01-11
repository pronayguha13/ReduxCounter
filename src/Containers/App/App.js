import styles from "./App.module.css";

//Component import
import Counter from "../../Components/Counter";
import Controller from "../../Containers/Controller/Controller";
//
const App = () => {
  return (
    <div className={styles.App}>
      <Counter />
      <Controller />
    </div>
  );
};
export default App;
