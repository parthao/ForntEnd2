import axios from 'axios';

export default axios.create({
  baseURL: 'https://timelesstreasure.myproject.com.pl/',
  headers: {
    'Content-Type': 'application/json',
  },
});