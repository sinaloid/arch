import axios from 'axios';

export const apiURL = "https://arch.edic-municipalities.com/"
//export const apiURL = "http://127.0.0.1:8000/"

const request = axios.create({
    baseURL: apiURL+"api/",
    withCredentials: false,
    headers: {
        'Accept':'application/json',
    },
});



export default request