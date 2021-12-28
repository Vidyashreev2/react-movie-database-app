import { useEffect, useState } from 'react';
import API from '../../API';


const useMovieFetch = (movieId) => {
    const [state, setState] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })
                console.log('state', state);
                setLoading(false);

            } catch (error) {
                setError(true);
            }
        }
        const sessionState = sessionStorage.getItem(movieId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])

    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state])

    return { state, loading, error };
}

export default useMovieFetch;