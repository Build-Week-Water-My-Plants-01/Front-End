import axios from 'axios';

//baseURL needs to be properly implement once endpoints for login are available

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://water-my-plants-01.herokuapp.com/'
    })
}