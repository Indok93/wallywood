import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
    <div>
      {apiData ? (
        <>
          <h2>{apiData.name}</h2>
          <p>{apiData.description}</p>
          <p>Pris: {apiData.price},00 DKK</p>
          <img src={apiData.image} alt={apiData.name} />
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
