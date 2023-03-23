import axios from "axios";
const SERVER_HOST = `http://localhost:8000`;

const getProfile = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.get(`${SERVER_HOST}/user/profile`, { withCredentials: true });
            resolve(result.data.user);
        } catch (err) {
            reject(err.message);
        }
    });
};

const login = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.post(`${SERVER_HOST}/user/login/`, payload, { withCredentials: true });
            resolve(result.data.user);
        } catch (err) {
            reject(err.message);
        }
    });
};

const register = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.post(`${SERVER_HOST}/user/register/`, payload, { withCredentials: true });
            resolve(result.data);
        } catch (err) {
            reject(err.message);
        }
    });
};

const verifyEmail = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.post(`${SERVER_HOST}/user/verifyEmail/`, payload, { withCredentials: true });
            resolve(result.data.user);
        } catch (err) {
            reject(err.message);
        }
    });
};

const logout = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await axios.post(`${SERVER_HOST}/user/logout/`, { withCredentials: true });
            resolve();
        } catch (err) {
            reject(err.message);
        }
    });
};

export {
    getProfile,
    login,
    register,
    verifyEmail,
    logout
};
