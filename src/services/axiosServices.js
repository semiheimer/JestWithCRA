import axios from "axios"
const URL='https://jsonplaceholder.typicode.com/posts';

const getPosts=()=>{
	return axios.get(URL).then((res)=>res.data)
}

const getPost=(id)=>{
	return axios.get(`${URL}/${id}`).then((res)=>res.data)
}

 const axiosServices={
	getPost,getPosts
}

export default axiosServices