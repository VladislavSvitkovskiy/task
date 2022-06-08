import axios from 'axios';

import { forget } from '../localStorage';

const SERVER_API_URL = 'http://10.0.0.4:8080';

const configureAxios = () => {
  axios.defaults.baseURL = SERVER_API_URL;

  axios.interceptors.request.use(async(config) => {
    config.headers!['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return { ...config, metadata: { startTime: Date.now() } };
  });
  axios.interceptors.response.use(undefined, (error) => {
    switch (error.response.status) {
      case 401:
        if (process.env.NODE_ENV === 'production') {
          forget('token');
          document.location.href = '/';
        }
        break;

      case 422:
        throw error;

      default:
        break;
    }
    return error;
  });
};

export default configureAxios;
