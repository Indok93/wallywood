import { RandomPosters } from "../../components/Posters/RandomPosters"
import curtain from "../../assets/Images/curtain.jpg";
import styles from "../Home/Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
        <img src={curtain} alt={curtain} />
        <RandomPosters />
    </div>
  )
}
