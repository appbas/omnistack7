import axios from 'axios';

const api = axios.create({
    // localhost da minha márquina: 10.0.3.2
    // localhost da minha márquina: 10.0.2.2 (android studio)
    baseURL: 'http://10.0.3.2:3333'
});

export default api;