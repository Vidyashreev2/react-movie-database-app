import apiSettings from "../../API";
import { useState, useEffect } from "react";
import { isPersistedState } from "../../helpers";

const intialState = {
    page: 0,
    result: [],
    total_result: 0,
    total_pages: 0,
};

export const useFetchMovie = () => {
    const [state, setState] = useState(intialState);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            const movies = await apiSettings.fetchMovies(searchTerm, page);
            setState((prev) => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (!searchTerm) {
            const sessionStorage = isPersistedState("homeState");
            if (sessionStorage) {
                setState(sessionStorage);
                console.log(state);
                return;
            }
        }
        setState(intialState);
        fetchMovies(1, searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state));
    }, [searchTerm, state]);
    return { state, error, loading, searchTerm, setSearchTerm, setIsLoadingMore };
};
