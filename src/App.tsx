import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { NewTaskBar } from "./components/NewTaskBar";
import { TaskList } from "./components/TaskList";

import "./global.css";
import styles from "./App.module.css";

interface Task {
  id: string;
  description: string;
  isComplete: boolean;
}

export function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTaskBar taskList={taskList} onCreateNewTask={setTaskList} />

        <TaskList taskList={taskList} onSetTask={setTaskList} />
      </main>
    </div>
  );
}
