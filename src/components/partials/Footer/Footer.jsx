
import styles from "../Footer/Footer.module.scss";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.gridWrapper}>
        <div className={styles.footerDivOne}>
          <h3>wallywood</h3>
          <p>Øster Uttrupvej 1</p>
          <p>9000 Aalborg</p>
        </div>
        <div className={styles.footerDivTwo}>
          <p>CVR: 12345678</p>
          <p>MAIL: info@plakatshoppen.dk</p>
          <p>MOBIL: +45 9812 3456</p>
        </div>
        <div>{/*empty*/}</div>
        <div className={styles.footerDivFour}>
          <FaPinterestSquare  className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaFacebookSquare className={styles.icon} />
          <FaTwitterSquare className={styles.icon} />
        </div>
      </div>
    </footer>
  )
}
