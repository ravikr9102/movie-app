import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Movies from "./Movies";

function Home() {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");
  const [fav, setFav] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const url = text
          ? `https://movie-app-api-bevg.onrender.com/api/movies/search?query=${text}`
          : `https://movie-app-api-bevg.onrender.com/movies`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.Search) {
          setMovie(data.Search);
        } else {
          setMovie([]);
        }
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [text, fav]);

  return (
    <>
      <Header text={text} handleChange={handleChange} />
      <Movies
        error={error}
        movie={movie}
        loading={loading}
        setFav={setFav}
        searchText={text}
      />
    </>
  );
}

export default Home;
