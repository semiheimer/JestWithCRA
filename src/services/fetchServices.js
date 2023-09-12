const URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = () =>
    fetch(URL)
        .then(res => res.json())
        .then(res => res.data);

const fetchPost = id =>
    fetch(`${URL}/${id}`)
        .then(res => res.json())
        .then(res => res.data);

const fetchServices = {
    fetchPost,
    fetchPosts,
};

export default fetchServices;
