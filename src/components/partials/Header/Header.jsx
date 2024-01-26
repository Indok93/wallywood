import { Navbar } from "../Navbar/Navbar"
import styles from "../Header/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>wallywood</div>
      <Navbar></Navbar>
      <i>sd</i>
    </header>
  )
}
