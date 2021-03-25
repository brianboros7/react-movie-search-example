import React from 'react'; 
import MovieSearchAPI from '../../components/api/MovieSearchAPI'
import MovieSearchForm from '../../components/app/forms/MovieSearchForm'

import {Container, Row, Col} from 'react-bootstrap'
import './style.css'

function AppHome() { 

    return(
        <Container className="movie-search-home">
            <Row>
                <h1>Movie Search Home</h1>

                <Col>
                    <section className="movie-search-section">
                        <div className="movie-search-wrapper"> 
                            <MovieSearchForm /> 

                            <MovieSearchAPI /> 
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default AppHome