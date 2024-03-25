import axios from 'axios';

const url = 'https://caracola-ultimo-backend.vercel.app/lain';



export const consulta = (consultaa:any) => axios.post(url, consultaa);
