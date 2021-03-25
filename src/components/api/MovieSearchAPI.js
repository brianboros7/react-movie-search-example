import React, {useEffect, useState} from 'react'; 

function MovieSearchAPI() { 
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState([''])

    // eslint-disable-next-line
    const loadData = async (e) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDdiYmEwOGY4M2E4ZjhiM2VlOTVjNmRjZDhkZjc5OCIsInN1YiI6IjVmYjZiNTc0Y2Y0YjhiMDA0MDg4ODM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqg3FNOHT6LbiBsh9MPDbbxkzpIH7MjIlMnz5zBVxbU=${query}&page=1&include_adult=true`;       

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    console.log("fetching")

    useEffect(() => {
        loadData()
        setQuery(query)
    }, [query, loadData])
    console.log("data Loaded")

    return(
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <div className="card" key={movie.id}>
                    <img className="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                    />
                    <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                    </div>
                </div>
            ))} 
        </div> 
    )
}

export default MovieSearchAPI