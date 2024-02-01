import { Navbar } from "../Navbar/Navbar"
import styles from "../Header/Header.module.scss";
import { useAuth } from "../../Providers/AuthProvider";

export const Header = () => {
  const {loginData} = useAuth();

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>wallywood</div>
      <Navbar></Navbar>
      <i className="fa-solid fa-basket-shopping"></i>
      {loginData && <div className={styles.login}>Du er logget ind som {loginData.user.firstname}</div>}
    </header>
  )
}
