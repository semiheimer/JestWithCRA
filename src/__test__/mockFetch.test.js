import {render, renderHook, screen} from '@testing-library/react';
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
    it('should fetch normally', async () => {
        const {result} = renderHook(() => useFetch());
        render(<Test99 />);
        expect(result.current.isLoading).toBe(false);
        const listItems = screen.getAllByRole('listitem');
        expect(result.current.data).not.toEqual([]);
        expect(listItems.length).toBe(MOCK_POSTS.length);
        // Hata almadan işlem tamamlanmalı
        expect(result.current.error).toBe(undefined);
    });
});
