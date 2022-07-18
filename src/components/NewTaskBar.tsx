import { FormEvent, useState } from "react";
import { uid } from "uid";

import styles from "./NewTaskBar.module.css";

interface Task {
  id: string;
  description: string;
  isComplete: boolean;
}

interface NewTaskBarProps {
  taskList: Task[];
  onCreateNewTask: (taskList: Task[]) => void;
}

export function NewTaskBar({ taskList, onCreateNewTask }: NewTaskBarProps) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateNewtask(event: FormEvent) {
    event.preventDefault();

    const task = {
      id: uid(),
      description: taskDescription,
      isComplete: false,
    };

    const newTaskList = [...taskList];
    newTaskList.push(task);

    onCreateNewTask(newTaskList);
    setTaskDescription("");
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateNewtask}>
      <textarea
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        required
      ></textarea>
      <button type="submit">
        <span>Criar</span>
        <img src="src/assets/plusIcon.svg" />
      </button>
    </form>
  );
}
