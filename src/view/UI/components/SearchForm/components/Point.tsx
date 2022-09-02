import styles from "../styles.module.scss";

export const Point = () => {
  return (
    <div className={styles.points}>
      <div className={styles.point}></div>
      <div className={styles.line}></div>
      <div className={styles.point}></div>
    </div>
  );
};
