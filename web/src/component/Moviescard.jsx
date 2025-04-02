import '../css/movieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function Moviescard({movie}) {
    const { 
        addToFavorite,
        removeFromFavorites,
        isFavorites } =  useMovieContext();
    const favorite = isFavorites(movie.id);
    console.log(movie);

    function onAddtoFavrites(e) {
        e.preventDefault()
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorite(movie);
        }
    }

    return (


        <div className="Movies-card">


            <div className="movies_poster">

                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />

                <div className="movie_overlay">

                    <button className={`favorite_btn${favorite ? "active" : ""}`} onClick={onAddtoFavrites}> ❤️ </button>
                </div>
            </div>       
             <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date.split("-")[0]}</p>
            </div>
        </div>

    );
}

export default Moviescard;
