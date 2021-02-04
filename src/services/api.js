import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fogo5000-back.herokuapp.com/',
});

export default api;
