import styles from "../Main/Main.module.scss";

export const Main = ({children}) => {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  )
}
