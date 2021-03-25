import React from 'react'
import Button from 'react-bootstrap/Button'

export default function MovieSearchForm(searchMovies, query, setQuery) {

    return(
        <div className="border p-10">
            <h2>Search for your favorite movie's below!</h2>

            <form className="movie-search-form">
                <label htmlFor="query" className="label p-2">
                    Search Movie's
                </label>
                <input 
                    type="text" 
                    placeholder="click here to search" 
                    name="query" 
                    className="p-1"
                    value={query} onChange={(e) => setQuery(e.target.value)} 
                />
                <Button 
                    className="movie-search-btn mx-2"
                    varient="primary"
                    type="submit">
                    onClick={searchMovies}
                    Search 
                </Button>
            </form>
        </div>
    )
}