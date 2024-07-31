import { useState } from "react";

export function useFetch(url){
  const [data, setData] = useState([])
  fetch(url)
  //fetch("http://localhost:3000/photos")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((e) => setError(e))
    .finally(() => {
      setLoading(false);
    });

    return data
}