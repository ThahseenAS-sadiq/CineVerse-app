import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-16 border-t-2 border-red-700 bg-gray-900 text-gray-400 py-6 bottom-0">
      
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* Brand Name */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          🎬 CineVerse
        </h2>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-gray-500 mb-4">
          Discover Movies, Ratings, and Details Powered by TMDB API.
        </p>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} CineVerse. All Rights Reserved.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
