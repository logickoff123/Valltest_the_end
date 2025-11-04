import styles from "./mainPage.module.css";



export default function MainContainers() {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.heading}>Главная</h1>
        <div className={styles.content}>
        </div>
      </div>
    </main>
  );
}