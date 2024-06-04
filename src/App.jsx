import { useState, useEffect } from "react";
import "./InterSection.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/photos-short-list")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "Loading";
  } else if (error != null) {
    return "Error";
  } else {
    return (
      <div className="grid">
        {images.map((image) => (
          <div className="card"  key={image.id}>
            <img  style={{ width: "100px" }} src={image.url} />
          </div>
        ))}
      </div>
    );
  }
  //   console.log(jsx)
  // return (
  //   <div class="grid">
  //   <img src="https://via.placeholder.com/600/92c952" />
  //   <img src="https://via.placeholder.com/600/771796" />
  //   <img src="https://via.placeholder.com/600/24f355" />
  //   <img src="https://via.placeholder.com/600/d32776" />
  //   <img src="https://via.placeholder.com/600/f66b97" />
  //   <img src="https://via.placeholder.com/600/92c952" />
  //   <div class="skeleton">Loading...</div>
  //   <div class="skeleton">Loading...</div>
  //   <div class="skeleton">Loading...</div>
  //   <div class="skeleton">Loading...</div>
  //   <div class="skeleton">Loading...</div>
  //   <div class="skeleton">Loading...</div>
  // </div>
  // )
}

export default App;
