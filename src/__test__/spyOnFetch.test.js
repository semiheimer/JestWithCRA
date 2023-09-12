import {MOCK_POSTS} from '../mocks';
import fetchServices from '../services/fetchServices';

const fetch = jest.spyOn(window, 'fetch');

describe('App', () => {
    it('should fetch normally', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve({data: MOCK_POSTS}),
        });
        const result = await fetchServices.fetchPosts();
        expect(result).toHaveLength(MOCK_POSTS.length);
        expect(result).toMatchObject(MOCK_POSTS);
    });
});
