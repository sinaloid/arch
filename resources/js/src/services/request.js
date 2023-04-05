import axios from 'axios';

const URL = "https://arch.edic-municipalities.com/api/"

const request = axios.create({
    baseURL: URL,
    withCredentials: false,
    headers: {
        'Accept':'application/json',
    },
});



export default request