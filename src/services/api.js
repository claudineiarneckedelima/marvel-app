import axios from 'axios';

export const apiMarvel = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
});

export const apiJsonServer = axios.create({
    baseURL: 'http://localhost:3000'
});