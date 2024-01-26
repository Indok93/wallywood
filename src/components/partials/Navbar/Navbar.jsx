import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="poster">Plakater</NavLink></li>
            <li><NavLink to="about">Om os</NavLink></li>
            <li><NavLink to="contact">Kontakt</NavLink></li>
            <li><NavLink to="login">Login</NavLink></li>
        </ul>
    </nav>
  )
}
