import React, { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=6fa2934cc28b8874ec573ed362ee0106`;

    if (search.length > 0) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=6fa2934cc28b8874ec573ed362ee0106`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results || []))
      .catch((err) => console.log("Fetch Error:", err));

  }, [page, search]); // Re-run when page OR search changes

  return (
    <div className="p-4 pt-20">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search movies..."
        className="p-4 w-3/4 md:w-1/2 bg-gray-900 bg-opacity-60 backdrop-blur-md text-xl
         text-white fixed top-25 left-1/2 transform -translate-x-1/2 z-10 border-2 rounded border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.4)] transition"
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // Reset page when searching
        }}
      />

      {/* Page Heading */}
      <div className="text-center mt-28 mb-10">
        <h1 className="text-5xl md:text-6xl font-bold text-red-700 tracking-wide drop-shadow-xl">
          Discover the Best of Cinema
        </h1>
        <p className="text-gray-400 text-2xl font-semibold md:text-2xl mt-5">
          Explore blockbusters, trending hits, and hidden gems — all in one place.
        </p>
      </div>


      {/* Movie Grid */}
      <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-38">
        {movies.length > 0 ? (
          movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center text-white col-span-full">No movies found 📭</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination-container flex justify-between mt-8">
        <button
          disabled={page === 1}
          className="bg-red-600 p-2 text-white rounded disabled:opacity-40  border-2 border-red-900 hover:border-red-900 transition-all duration-300 ease-in-out hover:-translate-y-2  hover:shadow-red-700/50 hover:shadow-lg"
          onClick={() => setPage((prev) => prev - 1)}
        >
          PREV
        </button>

        <span className="text-white font-semibold">Page {page}</span>

        <button
          className="bg-red-600 p-2 text-white rounded  border-2 border-red-900 hover:border-red-900 transition-all duration-300 ease-in-out hover:-translate-y-2  hover:shadow-red-700/50 hover:shadow-lg"
          onClick={() => setPage((prev) => prev + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Home;
