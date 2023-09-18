import Loader from './Loader';
import { FcLike } from 'react-icons/fc';

function Home(props) {
  const { error, movie, setFav } = props;

  const saveFavourite = async (movie) => {
    setFav(movie + '-add');
    await fetch('http://localhost:8000/api/movies/favourite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movieId: movie }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const removeFavourite = async (id) => {
    setFav(id + 'remove');
    await fetch(`http://localhost:8000/api/movies/favourite/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="p-9">
          <div className="grid grid-cols-4 gap-6">
            {movie.length === 0 ? (
              <Loader />
            ) : (
              <>
                {movie.map((value, i) => (
                  <div key={i}>
                    <img src={value.Poster} alt="" />
                    <h3 className="pt-2 text-base text-center font-extrabold text-cyan-500">
                      {' '}
                      <span className="text-rose-500">Title : </span>
                      {value.Title}
                    </h3>
                    <h4 className="text-base text-center font-extrabold text-cyan-500">
                      {' '}
                      <span className="text-rose-500">Year : </span>
                      {value.Year}
                    </h4>
                    {!value.favourite ? (
                      <div className="flex justify-center items-center py-4">
                        <button
                          onClick={() => saveFavourite(value.imdbID)}
                          className="flex justify-center items-center rounded-xl text-3xl p-1 px-2 bo border border-red-300 cursor-pointer"
                        >
                          <span className="text-base mr-1 text-white">
                            Add as Favourite
                          </span>
                          <FcLike />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center py-4">
                        <button
                          onClick={() => removeFavourite(value.imdbID)}
                          className="flex justify-center items-center rounded-xl text-3xl p-1 px-2 bo border border-red-300 cursor-pointer"
                        >
                          <span className="text-base mr-1 text-white">
                            Remove from Favourite
                          </span>
                          <FcLike />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
