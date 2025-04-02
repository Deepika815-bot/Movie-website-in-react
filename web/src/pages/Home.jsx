import Moviescard from "../component/Moviescard";
import { useState, useEffect } from "react";

import { SearchMovies, fetchPopularMovies } from "../service/api";
import "../css/home.css"

function Home() {
    // State to manage the search query input and movie data
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]); // Updated variable name to `movies`
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(""); // Added error state for better error handling

    // Function to load popular movies on initial render
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await fetchPopularMovies();
                setMovies(popularMovies); // Correct variable for setting movies
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    // Handle the search form submission
    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true); // Set loading to true during the search

        try {
            const searchResults = await SearchMovies(searchQuery);
            setMovies(searchResults);
            setError("") // Update state with search results
        } catch (err) {
            console.log(err);
            setError("Failed to search for movies...");
        } finally {
            setLoading(false); // Set loading to false after search is done
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    value={searchQuery}
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? <div className="loading">  Loading...</div> :
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <Moviescard movie={movie} key={movie.id} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;
