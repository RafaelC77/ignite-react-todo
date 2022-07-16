import { FiPlusCircle } from "react-icons/fi";

import styles from "./NewTaskBar.module.css";

export function NewTaskBar() {
  return (
    <form className={styles.newTaskForm}>
      <textarea placeholder="Adicione uma nova tarefa" required></textarea>
      <button type="submit">
        <span>Criar</span>
        <img src="src/assets/plusIcon.svg" alt="" />
      </button>
    </form>
  );
}
