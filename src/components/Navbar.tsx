import { FormEvent } from "react";

import apiClient from "../services/api-client";


interface Movie {
  searchedMovie: string;
  handleSearchedMovie: any;
  handleGetMovieInfo: any;
  handleError: any;
}

function Navbar({
  handleSearchedMovie,
  searchedMovie,
  handleGetMovieInfo,
  handleError,
}: Movie) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    apiClient
      .get(`http://www.omdbapi.com/?t=${searchedMovie}&apikey=bfc24721`)
      .then((res) => handleGetMovieInfo(res.data))
      .catch((err) => handleError(err.message));
  };

  return (
    <>
      <nav className="sm:grid grid-cols-2 grid-rows-2 w-full text-white h-1/6">
        <div className="m-2">
          <span className="sm:pl-1">LOGO</span>
          <span className="sm:pl-7 pl-2"><a href="">Home</a></span>
          <span className="sm:pl-4 pl-2"><a href="">WatchList</a></span>
        </div>
        {/* <ul className="flex flex-row justify-center sm:m-2 relative sm:bottom-0 bottom-7 right-8 sm:right-0"> 
          <li className="">
            <a href="">Home</a>
          </li>
          <li className="pl-5">
            <a href="">WatchList</a>
          </li>
        </ul> */}

        <div className="sm:m-2 sm:ml-4 m-1 flex justify-end bottom-8 sm:bottom-0 relative">
      
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex justify-center items-center col-span-3 relative bottom-4 sm:bottom-0 w-full"
        >
          <input
            onChange={(e) => {
              handleSearchedMovie(e.target.value);
            }}
            className="text-black rounded-xl border border-border w-1/3 p-1 bg-white shadow-2xl"
            type="text"
            placeholder="search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
