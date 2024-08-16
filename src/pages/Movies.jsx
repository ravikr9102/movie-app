import { useState } from "react";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import { AiFillHeart } from "react-icons/ai";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router-dom";

function Movies(props) {
  const { error, movie, setFav, loading, searchText, fetchSingleMovie } = props;
  const [loadingMovies, setLoadingMovies] = useState(new Set());

  const saveFavourite = async (movieId) => {
    setLoadingMovies((prev) => new Set(prev).add(movieId));
    try {
      await fetch(
        "https://movie-app-api-bevg.onrender.com/api/movies/favourite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movieId }),
        }
      );
      setFav(movieId + "-add");
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMovies((prev) => {
        const newSet = new Set(prev);
        newSet.delete(movieId);
        return newSet;
      });
    }
  };

  const removeFavourite = async (id) => {
    setLoadingMovies((prev) => new Set(prev).add(id));
    try {
      await fetch(
        `https://movie-app-api-bevg.onrender.com/api/movies/favourite/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFav(id + "-remove");
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMovies((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  return (
    <>
      {error ? (
        <div className="flex items-center justify-center md:h-[50vh] tracking-wide">
          <section className="flex flex-col items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold md:text-3xl text-black">
                {error}
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 max-h-full">
          <div className="md:px-20 px-10 md:py-16 py-8">
            <h1 className="text-3xl text-white font-medium mb-6 font-sans">
              {searchText ? "Movies Matching Your Search" : "Popular"}
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
              {loading ? (
                <>
                  {[...Array(10)].map((_, i) => (
                    <Loader key={i} />
                  ))}
                </>
              ) : movie.length === 0 ? (
                <div className="flex items-center justify-center w-full col-span-2 md:col-span-4">
                  <NotFound />
                </div>
              ) : (
                <>
                  {movie.map((value, i) => (
                    <div
                      key={i}
                      className="bg-gray-800/60 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transform transition duration-500 flex flex-col"
                    >
                      <Link to={`/movie-details/${value.imdbID}`}>
                        <img
                          className="w-full h-64 object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-105"
                          src={value.Poster}
                          alt={value.Title}
                        />
                      </Link>
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            <span className="text-rose-500">Title:</span>{" "}
                            {value.Title}
                          </h3>
                          <h4 className="text-sm font-medium text-gray-400 mb-4">
                            <span className="text-rose-500">Year:</span>{" "}
                            {value.Year}
                          </h4>
                        </div>
                        {!value.favourite ? (
                          <div className="flex justify-center">
                            <button
                              onClick={() => saveFavourite(value.imdbID)}
                              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white text-sm font-medium py-2 px-4 rounded-full flex justify-center items-center shadow-md transform transition duration-300 hover:scale-105 min-w-[200px]"
                              disabled={loadingMovies.has(value.imdbID)}
                            >
                              {loadingMovies.has(value.imdbID) ? (
                                <BounceLoader size={20} />
                              ) : (
                                <>
                                  <AiFillHeart className="text-xl mr-2 text-white" />
                                  <span>Save as Favourite</span>
                                </>
                              )}
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <button
                              onClick={() => removeFavourite(value.imdbID)}
                              className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white text-sm font-medium py-2 px-4 rounded-full flex justify-center items-center shadow-md transform transition duration-300 hover:scale-105 min-w-[200px]"
                              disabled={loadingMovies.has(value.imdbID)}
                            >
                              {loadingMovies.has(value.imdbID) ? (
                                <BounceLoader size={20} />
                              ) : (
                                <>
                                  <AiFillHeart className="text-xl mr-2 text-red-500" />
                                  <span>Remove from Favourite</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movies;
