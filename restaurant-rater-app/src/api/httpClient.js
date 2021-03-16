import axios from 'axios';
import promise from 'promise';
import { store } from 'store';

const httpClient = axios.create({
  baseURL: 'http://192.168.1.143:5000/api',
});

httpClient.interceptors.request.use(
  async (request) => {
    const token = store.getState().auth.token;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    console.log(request);
    return request;
  },
  (error) => promise.reject(error)
);

httpClient.interceptors.response.use(async (response) => {
  console.log(response);
  return response.data;
});

export default httpClient;
