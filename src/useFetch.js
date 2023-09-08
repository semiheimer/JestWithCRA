import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(endpoint);
            setData(response.data);
        } catch (errors) {
            alert('There is an error');
            setError(errors);
        } finally {
            setIsLoading(false);
        }
    });
    useEffect(() => {
        fetchData(endpoint);
    }, []);

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
export default useFetch;
