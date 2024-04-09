import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchedMovie from "./components/SearchedMovie";
import MovieList from "./components/MovieList";
// import List from "./components/List";

function App() {
  const [movieName, setMovieName] = useState<string>("");
  const [movieInfos, setMovieInfos] = useState({
    Title: "",
  });
  const [error, setError] = useState("");

 

  //scrollTo(0);
  return (
    <>
      <Navbar
        handleSearchedMovie={setMovieName}
        searchedMovie={movieName}
        handleGetMovieInfo={setMovieInfos}
        handleError={setError}
      />

      {!error && movieInfos.Title && (
        <SearchedMovie movieDetails={movieInfos} />
      )}
      {!movieInfos.Title && movieInfos.Title !== "" && (
        <div className="flex justify-center">
          <h2 className="uppercase m-auto text-danger">movie not found</h2>
        </div>
      )}
      <MovieList handleGetMovieInfo={setMovieInfos} />
    </>
  );
}

export default App;
