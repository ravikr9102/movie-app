import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../components/SingleMoviePageLoader";

export const SingleMovieDetail = () => {
  const { movieId } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to fetch single movie details
  const fetchSingleMovie = async () => {
    setLoading(true);
    try {
      const url = `https://movie-app-api-bevg.onrender.com/api/movies/${movieId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await response.json();
      setSingleMovie(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleMovie();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <SkeletonLoader />
      ) : error ? (
        <div className="flex items-center justify-center md:h-[50vh] tracking-wide">
          <section className="flex flex-col items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold md:text-3xl text-black">
                {error}
              </p>
            </div>
          </section>
        </div>
      ) : singleMovie ? (
        <div className="relative w-full">
          <div
            className="absolute inset-0 -z-10 h-full bg-cover bg-no-repeat bg-[center_top] blur-3xl bg-neutral-500 bg-blend-multiply"
            style={{ backgroundImage: `url(${singleMovie.Poster})` }}
          ></div>

          <div className="w-full relative flex flex-col items-center tracking-wide">
            <div className="w-4/5">
              <img
                className="w-full max-h-[550px] h-auto object-cover object-center"
                src={singleMovie.Poster}
                alt={singleMovie.Title}
              />
            </div>
            <div className="w-3/4 flex relative bottom-[225px] items-center">
              <div className="mr-8">
                <img
                  className="w-[500px] rounded-[10px] shadow-[rgba(0,0,0,0.86)_0px_22px_40px_6px]"
                  src={singleMovie.Poster}
                  alt={singleMovie.Title}
                />
              </div>
              <div className="flex flex-col justify-between text-[#E0E7FF]">
                <div className="space-y-2">
                  <div className="font-semibold text-3xl text-shadow-lg">
                    {singleMovie.Title}
                  </div>
                  <div className="text-shadow-lg">{singleMovie.Genre}</div>
                  <div className="flex items-center text-shadow-lg">
                    {singleMovie.imdbRating}
                    <FaStar className="ml-2 text-[#FBBE24]" />
                    <span className="ml-4">
                      {"(" + singleMovie.imdbVotes + ") votes"}
                    </span>
                  </div>
                  <div className="text-shadow-lg">{singleMovie.Runtime}</div>
                  <div className="text-shadow-lg">
                    {singleMovie ? "Release date: " + singleMovie.Released : ""}
                  </div>
                  <div className="pt-2 flex flex-col md:flex-row items-start">
                    {singleMovie && singleMovie.Ratings
                      ? singleMovie.Ratings.map((genre) => (
                          <>
                            <span
                              className="px-2 py-1 border-2 mt-2 md:mt-0 border-blue-500 rounded-[20px] text-blue-500 mr-4"
                              id={genre.id}
                            >
                              {genre.Source}
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>
                <div className="mt-12">
                  <div className="font-semibold text-xl">Summary</div>
                  <div className="mt-2">{singleMovie.Plot}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <Link to="/">
                <button className="bg-[#F3CD14] py-2 px-5 rounded-full font-medium">
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
};
