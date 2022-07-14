import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="src/assets/todoLogo.svg" alt="" />
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
}
