import axios from 'axios';
import {MOCK_POSTS} from '../mocks';
import axiosServices from '../services/axiosServices';

jest.mock('axios');

describe('App', () => {
    it('should get posts', async () => {
        const mockResponse = {data: MOCK_POSTS};
        axios.get.mockResolvedValue(mockResponse);
        const result = await axiosServices.getPosts();

        expect(result.length).toBe(MOCK_POSTS.length);
        expect(result).toHaveLength(MOCK_POSTS.length);
        expect(result).toMatchObject(MOCK_POSTS);
    });

    it('should get post', async () => {
        const mockResponse = {
            data: {a: 5},
        };
        axios.get.mockResolvedValue(mockResponse);
        const result = await axiosServices.getPost(12);
        expect(result).toMatchObject({a: 5});
    });
});
