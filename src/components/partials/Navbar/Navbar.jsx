import { NavLink } from "react-router-dom"
import styles from "../Navbar/Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navheader}>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="posters">Plakater</NavLink></li>
            <li><NavLink to="about">Om os</NavLink></li>
            <li><NavLink to="contact">Kontakt</NavLink></li>
            <li><NavLink to="login">Login</NavLink></li>
        </ul>
    </nav>
  )
}
