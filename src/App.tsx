import { Header } from "./components/Header";
import { NewTaskBar } from "./components/NewTaskBar";

import "./global.css";
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTaskBar />

        <TaskList />
      </main>
    </div>
  );
}
