import {render, screen} from '@testing-library/react';
import React from 'react';
import {useFetch} from '../hooks/useFetch';
import {MOCK_POSTS} from '../mocks';

function Test99() {
    const {isLoading, data} = useFetch();

    if (isLoading) <div>Loading...</div>;

    return (
        <ul>
            {data?.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

jest.mock('../hooks/useFetch', () => {
    return {
        useFetch: () => {
            return {isLoading: false, data: MOCK_POSTS};
        },
    };
});

describe('App', () => {
    it('should fetch normally', () => {
        render(<Test99 />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(MOCK_POSTS.length);
    });
});
