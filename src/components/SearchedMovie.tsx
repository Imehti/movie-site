import { useState } from "react";



function SearchedMovie(movieDetails:any) {
  const [moreDetails, setMoreDetails] = useState(false);
  const movie = movieDetails.movieDetails;
  let genre = movie.Genre;
  const genreArray = genre.split(",");

  const showMore = () => {
    setMoreDetails(!moreDetails);
  };

  return (
    <>

      <div className="sm:border-y border-searchedBox sm:w-3/4 m-auto mt-4 sm:flex">
        <img
          className="m-2 object-fill w-2/5 sm:h-80"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="flex flex-col font-extralight tracking-wide font-mono py-1 ml-2 w-full">
          <div className="mt-2">
            {genreArray.map((g: string) => (
              <button className="border bg-black p-1 px-2 rounded-md ml-2 text-white">
                {g}
              </button>
            ))}
          </div>
          <p className="text-white mt-2">
            Type <span className="text-info">{movie.Type}</span>
          </p>
          {movie.totalSeasons && (
            <p className="text-white">
              Seasons <span className="text-info">{movie.totalSeasons}</span>
            </p>
          )}
          <p className="text-white">
            Year <span className="text-info">{movie.Year}</span>
          </p>
          <p className="text-white">
            Country <span className="text-info">{movie.Country}</span>
          </p>
          <p className="text-white">
            IMDB <span className="text-info">{movie.imdbRating}</span>
          </p>
          <p className="text-white">
            Plot <span className="text-info">{movie.Plot}</span>
          </p>
          {moreDetails && (
            <>
            <p className="text-white">
            Runtime <span className="text-info">{movie.Runtime}</span>
            </p>
            <p className="text-white">
            Language <span className="text-info">{movie.Language}</span>
            </p>
            <p className="text-white">
              Actors <span className="text-info">{movie.Actors}</span>
            </p>
            <p className="text-white">
              Writer <span className="text-info">{movie.Writer}</span>
            </p>
            <p className="text-white">
              Awards <span className="text-info">{movie.Awards}</span>
            </p>
            </>
          )}
          <div className="flex justify-end mr-8">
            <span
              onClick={showMore}
              className="text-3xl text-white cursor-pointer"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchedMovie;
