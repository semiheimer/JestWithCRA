import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(endpoint);
            setData(response.data);
            setError(null);
        } catch (errors) {
            alert('There is an error');
            setError(errors);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData(endpoint);
    }, [fetchData]);

    const mutate = () => {
        fetchData(endpoint);
    };

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};
