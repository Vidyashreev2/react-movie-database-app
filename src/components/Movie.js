import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Grid from './Grid/grid';
import noImage from '../images/no_image.jpg';
import { useParams } from 'react-router-dom';
import useMovieFetch from './hooks/useMovieFetch';
import { Spinner } from './Spinner/Spinner.Style';
import BreadCrumb from './BreadCrumb/breadcrumb';
import MovieInfo from './MovieInfo/movieInfo';
import MovieInfoBar from './MovieInfoBar/movieInfoBar';
import Actor from './Actor/actor';


const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, error, loading } = useMovieFetch(movieId);

  if (loading) return <Spinner />
  if (error) return (<div>Somethng went wrong</div>);

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      {movie.actors && (<Grid header='Actor'>
        {movie.actors.map((actor) => <Actor
          key={actor.credit_id}
          name={actor.name}
          character={actor.character}
          imageUrl={
            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : noImage
          }
        />)}
      </Grid>)}
    </>
  )
}

export default Movie;