import axios from "axios";

const api2 = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default api2
  