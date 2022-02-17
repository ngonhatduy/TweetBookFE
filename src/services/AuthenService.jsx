import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://bookshopazure.azurewebsites.net/api/v1/',
    headers: {
        'content-type': 'application/json',
    }
})