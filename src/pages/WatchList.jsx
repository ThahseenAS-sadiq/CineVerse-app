import React, { useContext, useState } from 'react';
import { WatchListContext } from "../context/WatchListContext";
import GenreFilter from '../components/GenreFilter';
import Moviecard from '../components/Moviecard';

const WatchList = () => {
  const { watchlist, genreList } = useContext(WatchListContext);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const displayedMovies = filteredMovies.filter((movie) =>
    !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
  );

  return (
    <div className="p-4 pt-16">
      <input type="text"
       placeholder='Search movies...' 
       className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-20 left-1/2 transform -translate-x-1/2 z-10"
       onChange={(e) => setSearch(e.target.value)} />

       <div className="mt-8 flex justify-center">
        <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
       </div>

       <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {displayedMovies.length > 0 ? (
          displayedMovies.map((movie) => <Moviecard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center text-white col-span-full">No movies found 📭</p>
        )}
      </div>
    </div>
  );
};

export default WatchList