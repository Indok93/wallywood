import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Posters/RandomPosters.module.scss";
import { Link } from "react-router-dom";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

export const RandomPosters = () => {  
  const [apiData, setApiData] = useState([])

  const getData = async () => {
    const endpoint = `http://localhost:3000/posters?sort_key=random&limit=2&attributes=name,description,image`;
    const result = await axios.get(endpoint)
    console.log(result.data);
    setApiData(result.data);
  }

  useEffect(() => {
    getData()
  }, [setApiData])

  const maxLength = 200;
  
  return (
    <div>
        <h1 className={styles.headingOne}>Sidste nyt...</h1>
        <div className={styles.randomPosters}>
            {apiData && apiData.map(item => {
                return (
                    <div key={item.id} className={styles.itemWrapper}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles.items}>
                          <h2>{item.name}</h2>
                          <p className={styles.description} dangerouslySetInnerHTML={{__html: truncateText(item.description, maxLength)}}></p>
                          <p className={styles.genre}>{item.genres[0].title}</p>
                          <Link className={styles.readMoreButton}>Læs mere &raquo;</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
