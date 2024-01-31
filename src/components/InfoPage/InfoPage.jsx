
import space from "../../assets/Images/space.jpg";
import styles from "../InfoPage/InfoPage.module.scss";

export const InfoPage = () => {
  return (
    <div className={styles.wrapper}>
        <article>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem repudiandae ipsa at veritatis cupiditate. Perferendis eveniet animi qui provident dolorem doloribus non et modi enim ratione, sunt neque fugiat beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam magnam ratione placeat quam eum a ex repudiandae cumque animi voluptate odit at, illum sequi, dicta natus eaque. Explicabo, quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem qui beatae dolores hic voluptate quod praesentium, illum tempora tempore recusandae at consectetur vitae deleniti laboriosam odio vero incidunt, eveniet consequuntur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam reiciendis, harum id saepe, consequatur corrupti eos veritatis impedit voluptatem enim provident aspernatur exercitationem? Ea nemo obcaecati id harum in.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, quae veritatis explicabo voluptatem facilis ipsum possimus eius iusto architecto corporis dicta nulla dolorum omnis ad atque mollitia velit alias dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sapiente voluptatum. Dolorum mollitia doloremque maiores eius, sapiente laudantium similique facilis vitae dolorem, voluptate quae harum temporibus nemo rerum et vero.</p>
        </article>
        <img src={space} alt={space} />
    </div>
  )
}
