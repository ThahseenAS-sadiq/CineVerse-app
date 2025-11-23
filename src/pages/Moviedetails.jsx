import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Moviedetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const API_KEY = `6fa2934cc28b8874ec573ed362ee0106`;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    useEffect(() => {
        async function fetchMovie() {
            const res = await fetch(URL);
            const data = await res.json();
            setMovie(data);
            document.title = data.title;
        }
        fetchMovie();
    }, [id]);

    if (!movie) return <h2 className="text-center text-white mt-20 sm:text-lg md:text-xl">Loading...</h2>;

    return (
        <main className="max-w-6xl mx-auto p-4 sm:p-6 md:p-10 text-white mt-10 sm:mt-16 md:mt-20">

            {/* Header/Tagline */}
            <h2 className="text-gray-100 font-semibold text-xl sm:text-2xl md:text-3xl mb-4">
                {movie?.tagline || movie?.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

                {/* Poster */}
                <div className="flex justify-center md:block">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg shadow-lg w-60 sm:w-72 md:w-full"
                    />
                </div>

                {/* Details */}
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{movie.title}</h1>

                    {/* Genres */}
                    <div className="flex gap-2 mt-3 flex-wrap">
                        {movie.genres.map((g) => (
                            <span
                                key={g.id}
                                className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold"
                            >
                                {g.name}
                            </span>
                        ))}
                    </div>

                    {/* Rating */}
                    <p className="mt-3 text-yellow-400 font-semibold text-sm sm:text-base">
                        ⭐ {movie?.vote_average?.toFixed(1)}
                        <span className="text-gray-400 ml-1 sm:ml-2">
                            ({movie.vote_count} reviews)
                        </span>
                    </p>

                    {/* Overview */}
                    <p className="mt-4 text-gray-100 leading-6 text-sm sm:text-base">{movie.overview}</p>

                    {/* Movie facts */}
                    <div className="mt-6">
                        <table className="w-full text-left text-xs sm:text-sm md:text-base border-separate border-spacing-y-2">
                            <tbody>

                                <tr>
                                    <td className="font-semibold text-white">Runtime</td>
                                    <td className="text-gray-100">{movie.runtime} min</td>
                                </tr>

                                <tr>
                                    <td className="font-semibold text-white">Budget</td>
                                    <td className="text-gray-100">${movie.budget.toLocaleString()}</td>
                                </tr>

                                <tr>
                                    <td className="font-semibold text-white">Revenue</td>
                                    <td className="text-gray-100">${movie.revenue.toLocaleString()}</td>
                                </tr>

                                <tr>
                                    <td className="font-semibold text-white">Release Date</td>
                                    <td className="text-gray-100">{movie.release_date}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* IMDb Button */}
                    <a
                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-6 px-4 sm:px-5 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-sm sm:text-base"
                    >
                        🎬 View on IMDb
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Moviedetails;



