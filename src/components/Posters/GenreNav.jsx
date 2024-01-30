import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "../Posters/GenreNav.module.scss"

export const GenreNav = () => {
    const [apiData, setApiData] = useState([])

    const getData = async () => {
        const endpoint = `http://localhost:3000/genre`;
        const result = await axios.get(endpoint);
        // console.log(result.data);
        setApiData(result.data);
    }

    useEffect(() => {
        getData();
    }), [setApiData]

  return (
    <aside className={styles.wrapper}>
        <nav>
            <h2>Filtre</h2>
            <p>Genre:</p>
            <ul>
                {apiData && apiData.map(item => {
                    return (
                        <li key={item.id}>
                            <NavLink to={item.slug}>{item.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
        <div className={styles.prices}>
            <p>prisområde</p>
        </div>
    </aside>
  )
}
