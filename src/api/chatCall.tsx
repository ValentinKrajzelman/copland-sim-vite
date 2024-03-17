import axios from 'axios';

const url = 'http://127.0.0.1:3000/';



export const consulta = (consultaa:any) => axios.post(url, consultaa);
