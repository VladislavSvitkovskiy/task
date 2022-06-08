import axios from 'axios';

const SERVER_API_URL = 'https://api.github.com';

const configureAxios = () => {
  axios.defaults.baseURL = SERVER_API_URL;

  axios.interceptors.request.use(async(config) => {
    config.headers!['Accept'] = 'application/vnd.github.v3+json';
    config.headers!['User-Agent'] = 'my-app';
    return { ...config };
  });
};

export default configureAxios;
