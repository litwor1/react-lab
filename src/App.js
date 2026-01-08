import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";

function App() {
    const [movies, setMovies] = useState([]);

    const [showForm, setShowForm] = useState(false);

    function deleteMovie(titleToDelete) {
        const newMoviesList = movies.filter((movie) => movie.title !== titleToDelete);
        setMovies(newMoviesList);
    }

    function handleAddMovie(movie) {
        setMovies([...movies, movie]);
        setShowForm(false);
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>

            <h2>Movies</h2>
            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.title}>
                            {movie.title} ({movie.year})
                            <a
                                className="button-outline"
                                style={{marginLeft: '10px'}}
                                onClick={() => deleteMovie(movie.title)}>
                                Delete
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies to display</p>
            )}


            {showForm ? (
                <div style={{marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '20px'}}>

                    <MovieForm onMovieSubmit={handleAddMovie}/>

                </div>
            ) : (
                <button onClick={() => setShowForm(true)}>
                    Add a movie
                </button>
            )}

        </div>
    );
}

export default App;