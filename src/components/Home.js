
import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import noImage from '../images/no_image.jpg';
import Grid from './Grid/grid';
import Thumb from './Thumb/thumb';
import HeroImage from './HeroImage/heroImage';
import Button from './Button/button';

import { useFetchMovie } from './hooks/useFetchMovie';
import { Spinner } from './Spinner/Spinner.Style';
import SearchBar from './searchbar/SearchBar';
const Home = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useFetchMovie();
    const isValidArray = state?.results?.length;
    if(error) return <div>Something went wrong</div>
    return (<>
        {!searchTerm && (isValidArray) ?
            <HeroImage
                 image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />

            : null}
        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header={searchTerm? 'Search Results':'Popular Movies'}>
            {isValidArray && state.results.map((movie, index) => (
                <Thumb
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImage
                    }
                    movieId={movie.id}
                />
            ))}
        </Grid>
        {loading && <Spinner />}
        {state.page< state.total_pages && !loading && (<Button text='Load More' callback={()=> setIsLoadingMore(true)}/>)}

    </>)
}

export default Home;