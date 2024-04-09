import axios from "axios"

interface List{
   list:[{ Title:string,
    Year:string,
    imdbID:string,
    Type:string,
    Poster:string,}],
  header:string
}
interface Movie {
    handleGetMovieInfo: any;
  }

function List({list,header}:List,{handleGetMovieInfo}:Movie){
    
    
   
    
    return(
        <>
         <div className="ml-4 my-8 border-b border-b-white">
        <h1 className="uppercase text-white font-extrabold">{header}</h1>
      </div>
      <div className="grid sm:grid-cols-5 grid-cols-3 sm:gap-7 gap-3 mt-8">
        {list.map((movie) => (
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
                console.log(movie.Title);
                
                axios
                .get(`http://www.omdbapi.com/?t=${movie.Title}&apikey=bfc24721`)
                .then((res) => handleGetMovieInfo(res.data))
              }}
              className="rounded-2xl sm:aspect-square object-fill"
              src={movie.Poster}
              alt=""
            />
            <span className="text-white">{movie.Title}</span>
          </div>
        ))}
      </div>
    </>
        
    )
}

export default List