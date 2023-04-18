import axios from "axios";


const getPosts = async (limit, offset) => {
  return await axios.get(`http://localhost:8000/posts?limit=${limit}&offset=${offset}`)
}

const getPost = async (id) => {
  return await axios.get(`http://localhost:8000/posts?id=${id}`)
}

const createPost = async (post) => {
  return await axios.post('http://localhost:8000/posts', post)
}

const updatePost = async (post) => {
  return await axios.put(`http://localhost:8000/posts?id=${post._id}`, post);
}

const deletePost = async (id) => {
  return await axios.delete(`http://localhost:8000/posts?id=${id}`)
}



export { getPosts, getPost, createPost, updatePost,  deletePost};