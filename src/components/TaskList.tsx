import styles from "./TaskList.module.css";

const tasks = [
  {
    id: "1",
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isFinished: false,
  },
  {
    id: "2",
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isFinished: false,
  },
  {
    id: "3",
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isFinished: false,
  },
  {
    id: "4",
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isFinished: true,
  },
  {
    id: "5",
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isFinished: true,
  },
];

export function TaskList() {
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
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={task.id} />
              <label
                htmlFor={task.id}
                className={task.isFinished ? styles.finishedTask : ""}
              >
                {task.description}
              </label>
              <button>
                <img src="src/assets/trashIcon.svg" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
