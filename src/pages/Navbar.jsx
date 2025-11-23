import React, { useContext } from 'react'
import { WatchListContext } from "../context/WatchListContext";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { watchlist } = useContext(WatchListContext);
  return (
    <nav className="bg-gray-900 p-6 text-white flex justify-between fixed w-full top-0 z-10 border-b-2 border-red-700 shadow-[0_0_10px_rgba(255,0,0,0.4)] transition">
      <Link to="/" className="text-3xl font-bold ">
        🎬CineVerse
      </Link>

      <Link to="/watchlist" className="text-2xl">
        Watchlist ({ watchlist.length })
      </Link>
    </nav>
  )
}

export default Navbar;