import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { PosterItem } from "./PosterItem";
import styles from "../Posters/PosterList.module.scss";

export const PosterList = () => {
  const [apiData, setApiData] = useState([])
  const { genre } = useParams()

  const getData = async () => {
    const endpoint = `http://localhost:3000/posters/list_by_genre/${genre}`;
    const result = await axios.get(endpoint)
    console.log(result.data);
    setApiData(result.data);
  }

  useEffect(() => {
    getData()
  }, [genre])

  return (
    <div className={styles.posterwrapper}>
      {apiData && apiData.map(item => {
        return (
          <PosterItem 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
            slug={item.slug}
          />
        )
      })}
    </div>
  )
}
