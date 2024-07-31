import { useState, useEffect, useCallback, useRef } from "react";
import "./InterSection.js";
import { parseLinkHeader } from "./parseLinkHeader"
const ITEMS = 20;

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const nextPhotoUrlRef = useRef();

  // Function to fetch data
  function fetchData(url) {
    fetch(url)
      .then((response) => {
        // update nextPhotoUrlRef based on the response headers
        const linkHeader = response.headers.get("Link");
        const parsedLinks = parseLinkHeader(linkHeader);
        nextPhotoUrlRef.current = parsedLinks.next?.url;
        return response.json();
      })
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data]);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      });
  }

  // useCallback to handle the last image intersection
  const imageRef = useCallback((image) => {
    if (image == null || nextPhotoUrlRef.current == null) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchData(nextPhotoUrlRef.current);
        observer.unobserve(image); // Unobserve the last image
      }
    });

    observer.observe(image);
  }, []);

  useEffect(() => {
    // Initial data fetch
    fetchData(
      `http://localhost:3000/photos-short-list?_page=1&_limit=${ITEMS}`
    );
  }, []);

  if (loading) {
    return "Loading";
  } else if (error != null) {
    return "Error";
  } else {
    return (
      <div className="grid">
        {images.map((image, index) => (
          <img
            className="card"
            key={image.id}
            style={{ width: "100px" }}
            src={image.url}
            ref={index === images.length - 1 ? imageRef : undefined}
          />
        ))}
      </div>
    );
  }
}

export default App;
