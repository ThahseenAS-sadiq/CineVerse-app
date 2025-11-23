import React from 'react'

const GenreFilter = ({ genreList, setSelectedGenre }) => {
  return (
    <select className="p-2 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white border-2 rounded border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.4)] transition" 
    onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>
                {genre.name}
            </option>
        ))}
    </select>
  );
};

export default GenreFilter;