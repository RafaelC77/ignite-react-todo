import { FiPlusCircle } from "react-icons/fi";

import styles from "./NewTaskBar.module.css";

export function NewTaskBar() {
  return (
    <form className={styles.newTaskForm}>
      <textarea placeholder="Adicione uma nova tarefa" required></textarea>
      <button type="submit">
        <span>Criar</span>
        <FiPlusCircle size="1rem" />
      </button>
    </form>
  );
}
