import styles from "./TaskList.module.css";

interface Task {
  id: string;
  description: string;
  isComplete: boolean;
}
interface TaskListProps {
  taskList: Task[];
  onSetTask: (taskList: Task[]) => void;
}

export function TaskList({ taskList, onSetTask }: TaskListProps) {
  function handleTaskCompletion(taskId: string) {
    const previousTaskList = [...taskList];

    const updatedTaskList = previousTaskList.map((task) =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );

    onSetTask(updatedTaskList);
  }

  function handleDeleteTask(taskId: string) {
    const previousTaskList = [...taskList];

    const updatedTaksList = previousTaskList.filter(
      (task) => task.id !== taskId
    );

    onSetTask(updatedTaksList);
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.tasksInfo}>
        <span className={styles.createdTasks}>
          <b>Tarefas criadas</b>
          <span>5</span>
        </span>

        <span className={styles.finishedTasks}>
          <b>Concluídas</b>
          <span>2 de 5</span>
        </span>
      </div>

      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={task.id}
                onClick={() => handleTaskCompletion(task.id)}
              />
              <label
                htmlFor={task.id}
                className={task.isComplete ? styles.finishedTask : ""}
              >
                {task.description}
              </label>
              <button onClick={() => handleDeleteTask(task.id)}>
                <img src="src/assets/trashIcon.svg" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
