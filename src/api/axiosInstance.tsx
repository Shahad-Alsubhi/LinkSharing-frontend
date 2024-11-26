import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 
  `https://linksharing-backend.onrender.com/users`,
  headers: {
    'Content-Type': 'application/json',
    
  },

  withCredentials:true
});

export default axiosInstance;
