import { createContext, useState, useContext, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    // Load from localStorage once on startup
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  const [genreList, setGenreList] = useState([]);

   useEffect(() => {
       let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=6fa2934cc28b8874ec573ed362ee0106`;
   
       fetch(url)
         .then((response) => response.json())
         .then((data) => setGenreList(data.genres || []))
         .catch((err) => console.log("Fetch Error:", err));
   
     }, []);

  // Save to localStorage whenever watchlist changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    const exists = watchlist.some((m) => m.id === movie.id);

    if (!exists) {
      setWatchlist([...watchlist, movie]);
    } else {
      setWatchlist(watchlist.filter((m) => m.id !== movie.id));
    }
  };

  return (
    <WatchListContext.Provider value={{ watchlist, toggleWatchlist, genreList }}>
      {children}
    </WatchListContext.Provider>
  );
};

// Custom hook for easy usage
export const useWatchList = () => {
  return useContext(WatchListContext);
};
