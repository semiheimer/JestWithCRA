import React from 'react';
import './App.css';
import useFetch from './useFetch';

function Test99() {
    const {isLoading, data} = useFetch();
    if (isLoading) <div>Loading...</div>;
    else if (data?.length < 1) return <div>No data found</div>;
    return <div>{data && data?.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

function App() {
    return (
        <div>
            <div>Hello</div>
            <Test99 />
        </div>
    );
}

export default App;
