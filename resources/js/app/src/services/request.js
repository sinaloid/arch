import axios from 'axios';

const URL = "http://137.184.36.201:4200/"

const request = axios.create({
    baseURL: URL,
    withCredentials: false,
    headers: {
        'Accept':'application/json',
    },
});



export default request