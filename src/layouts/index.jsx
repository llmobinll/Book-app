import styles from "./index.module.css";

export function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>Search and enjoy</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mobin</p>
      </footer>
    </>
  );
}
