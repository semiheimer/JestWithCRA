import React from 'react';
import {useFetch} from '../hooks/useFetch';

const Listing = () => {
    const {data, isLoading} = useFetch();

    if (isLoading) return <div>Loading...</div>;
    return (
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default Listing;
