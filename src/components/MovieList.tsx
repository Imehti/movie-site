import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
// import List from "./List";
import MovieSkeleton from "./MovieSkeleton";

interface Movie {
  handleGetMovieInfo: any;
}

function MovieList({ handleGetMovieInfo }: Movie) {
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?s=${"dark"}&apikey=bfc24721`, {
        signal: controller.signal,
      })
      .then((res) => {
        setFirstList(res.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?s=${"see"}&apikey=bfc24721`, {
        signal: controller.signal,
      })
      .then((res) => {
        setSecondList(res.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return (
    <>
      {/* <List list={firstList} handleGetMovieInfo={handleGetMovieInfo} header="most popular"/>
    <List list={secondList} handleGetMovieInfo={handleGetMovieInfo} header="most rated"/> */}
      <div className="ml-3 mt-8 border-b border-white">
        <h1 className="uppercase text-white font-extrabold">Most popular</h1>
      </div>
      {error && <h2 className="text-white mt-5">{error}</h2>}
      {!error && (
        <div className="grid sm:grid-cols-5 grid-cols-3 sm:gap-7 gap-3 mt-8">
          {isLoading &&
            skeletons.map((skeleton) => <MovieSkeleton key={skeleton} />)}
          {firstList.map((movie) => (
            <div className="flex flex-col items-center relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 absolute top-1 right-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>

              <img
                onClick={() => {
                  axios
                    .get(
                      `http://www.omdbapi.com/?t=${movie.Title}&apikey=bfc24721`
                    )
                    .then((res) => handleGetMovieInfo(res.data));
                  window.scroll(0, 0);
                }}
                className="rounded-2xl sm:aspect-square object-fill"
                src={movie.Poster}
                alt=""
              />
              <span className="text-white">{movie.Title}</span>
            </div>
          ))}
        </div>
      )}

      {/*---------------------------- second list ----------------------------------------------------------*/}

      <div className="ml-3 mt-8 border-b border-white">
        <h1 className="uppercase text-white font-extrabold">Most rated</h1>
      </div>
      {error && <h2 className="text-white mt-5">{error}</h2>}
      {!error && (
        <div className="grid sm:grid-cols-5 grid-cols-3 sm:gap-7 gap-3 mt-8">
          {isLoading &&
            skeletons.map((skeleton) => <MovieSkeleton key={skeleton} />)}
          {secondList.map((movie) => (
            <div className="flex flex-col items-center relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 absolute top-1 right-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>

              <img
                onClick={() => {
                  axios
                    .get(
                      `http://www.omdbapi.com/?t=${movie.Title}&apikey=bfc24721`
                    )
                    .then((res) => handleGetMovieInfo(res.data));
                  window.scroll(0, 0);
                }}
                className="rounded-2xl sm:aspect-square object-fill"
                src={movie.Poster}
                alt=""
              />
              <span className="text-white">{movie.Title}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MovieList;
