import React, { useContext } from 'react'
import { WatchListContext } from "../context/WatchListContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Moviecard = ({ movie }) => {
  const { toggleWatchlist, watchlist } = useContext(WatchListContext);

  const inWatchList = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-md relative 
    border-2 border-red-800 hover:border-red-700 transition-all duration-300 ease-in-out hover:-translate-y-2  hover:shadow-red-700/50 hover:shadow-lg">

      {/* Make card clickable */}
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-contain rounded-sm cursor-pointer transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
        <p className="text-lg text-gray-400">Release Date: {movie.release_date}</p>
        {/* Rating */}
        <p className="text-yellow-400 font-bold text-2xl sm:text-base">
          ⭐ {movie?.vote_average?.toFixed(1)}/10
        </p>
      </Link>

      {/* Heart Button */}
      <button
        className="absolute top-2 right-2 text-2xl text-red-500"
        onClick={() => toggleWatchlist(movie)}
      >
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>

    </div>
  );
};

export default Moviecard;
