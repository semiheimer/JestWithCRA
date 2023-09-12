import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
    return axios.get(URL).then(res => res.data);
};

const getPost = async id => {
    return await axios.get(`${URL}/${id}`).then(res => res.data);
};

const axiosServices = {
    getPost,
    getPosts,
};

export default axiosServices;
