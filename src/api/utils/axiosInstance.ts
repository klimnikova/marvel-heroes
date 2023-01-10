import axios from 'axios';

const REQUEST_TIMEOUT = 180000;

const axiosBaseInstance = axios.create({
  headers: { Accept: 'application/json' },
  timeout: REQUEST_TIMEOUT,
});

export default axiosBaseInstance;
