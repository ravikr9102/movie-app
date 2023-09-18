import React, { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';

function App() {
  const [text, setText] = useState('');
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [fav, setFav] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/api/movies/search?query=${text}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.Search) {
            setMovie(data.Search);
          }
        });
    }, 300);
  }, [text, fav]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:8000/movies`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) {
            setMovie(data.Search);
          }
        });
    };
    fetchData();
  }, [!text ? fav : null]);

  return (
    <>
      <Header text={text} handleChange={handleChange} />
      <Home error={error} movie={movie} setFav={setFav} />
    </>
  );
}

export default App;
