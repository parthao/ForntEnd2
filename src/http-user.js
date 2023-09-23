import axios from 'axios';

export default axios.create({
  baseURL: 'https://timelesstreasure.myproject.com.pl/',
 // baseURL: 'http://localhost:8292/',
  headers: {
    'Content-Type': 'application/json',
  },
});