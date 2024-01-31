import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Posters/PosterDetails.module.scss";

export const PosterDetails = () => {
  const [apiData, setApiData] = useState({})
  const {genre, poster} = useParams();

  const getData = async () => {
    const endpoint = `http://localhost:3000/posters/${poster}`;
    const result = await axios.get(endpoint)
    console.log(result.data);
    setApiData(result.data);
  }

  useEffect(() => {
    getData();
  }, [poster])
  
  return (
    <div className={styles.wrapper}>
      {apiData ? (
        <>
          <div className={styles.imgWrapper}>
            <img src={apiData.image} alt={apiData.name} />
          </div>
          <article className={styles.contents}>
            <h3>{apiData.name}</h3>
            <p className={styles.description} dangerouslySetInnerHTML={{__html: apiData.description}}></p>
            <p className={styles.size}>Størrelse: {apiData.width} x {apiData.height} cm</p>
            <p className={styles.id}>Varenummer: {apiData.id}</p>
            <p className={styles.price}>Kr. {apiData.price},00</p>
            <div className={styles.bottomContents}>
              <input type="text" id="" placeholder="0"/>
              <button>Læg i kurv</button>
              <p>{apiData.stock} på lager</p>
            </div>
          </article>
        </>
      ) : (
        <>
          <h2>Fejl i data</h2>
          <p>Fandt ikke noget data på den aktuelle post</p>
        </>
      )}
    </div>
  )
}
