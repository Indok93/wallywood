import { Link } from "react-router-dom"
import styles from "../Posters/PosterItem.module.scss";

export const PosterItem = ({name, image, price, slug}) => {
  return (
    <div className={styles.wrapper}>
        <Link to={`${slug}`}>
          <img src={image} alt={name} />
        </Link>
        <h3>{name}</h3>
        <p>Kr. {price},00</p>
        <button>Læg i Kurv</button>
    </div>
  )
}
