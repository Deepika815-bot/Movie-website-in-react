import { useMovieContext } from '../contexts/MovieContext';
import '../css/Favorite.css';
import Moviescard from '../component/Moviescard';

function Favorites() {
  const { favorites, setFavorites } = useMovieContext();

  const addMovie = (movie) => {
    addMovieToFavorites(movie, favorites, setFavorites);
  };

  const removeMovie = (movieId) => {
    removeMovieFromFavorites(movieId, favorites, setFavorites);
  };

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>

        <div className="movies-grid">
          {favorites.map((movie) => (
            <Moviescard
              key={movie.id}
              movie={movie}
              onRemove={() => removeMovie(movie.id)} // Add remove functionality
              onAdd={() => addMovie(movie)} // Add functionality to add a movie to favorites
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorite-empty">
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites, and they will appear here!</p>
      </div>
    );
  }
}

export default Favorites;
    