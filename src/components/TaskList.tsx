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
  const totalCompletedTasks = taskList.reduce((acc, task) => {
    let completedTasks = acc;

    if (task.isComplete === true) {
      completedTasks++;
    }

    return completedTasks;
  }, 0);

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
          <span>{taskList.length}</span>
        </span>

        <span className={styles.finishedTasks}>
          <b>Concluídas</b>
          <span>
            {totalCompletedTasks} de {taskList.length}
          </span>
        </span>
      </div>

      <ul>
        {taskList.map((task) => {
          return (
            <li
              key={task.id}
              className={task.isComplete ? styles.finishedTask : ""}
            >
              <input
                type="checkbox"
                id={task.id}
                onClick={() => handleTaskCompletion(task.id)}
              />
              <label htmlFor={task.id}>{task.description}</label>
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
