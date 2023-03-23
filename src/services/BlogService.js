import axios from "axios";
const SERVER_HOST = `http://localhost:8000`;

const getAllBlogs = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.get(`${SERVER_HOST}/blog/`, { withCredentials: true });
            resolve(result.data.allBlogs);
        } catch (err) {
            reject(err.message);
        }
    });
};

const getBlogById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.get(`${SERVER_HOST}/blog/${id}/`, { withCredentials: true });
            resolve(result.data);
        } catch (err) {
            reject(err.message);
        }
    });
};

const createBlog = (blog) => {
    return new Promise(async (resolve, reject) => {
        try {
            await axios.post(`${SERVER_HOST}/blog/create/`, blog, { withCredentials: true });
            resolve();
        } catch (err) {
            reject(err.message);
        }
    });
};

const updateBlog = (blog) => {
    return new Promise(async (resolve, reject) => {
        try {
            await axios.post(`${SERVER_HOST}/blog/${blog.id}/`, blog, { withCredentials: true });
            resolve();
        } catch (err) {
            reject(err.message);
        }
    });
};

const deleteBlog = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.delete(`${SERVER_HOST}/blog/${id}`, { withCredentials: true });
            resolve(result);
        } catch (err) {
            reject(err.message);
        }
    });
};

export {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};
