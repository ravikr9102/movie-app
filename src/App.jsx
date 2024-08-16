import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { SingleMovieDetail } from "./pages/singleMovieDetail/SingleMovieDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:movieId" element={<SingleMovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
