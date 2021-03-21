import axios from 'axios';
import promise from 'promise';
import { store } from 'store';
import { FlashMessageService } from 'shared/services';
import { AuthTypes } from 'features/auth/types';

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

httpClient.interceptors.response.use(
  async (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    const { response } = error;
    const { status, data } = response;

    switch (status) {
      case 400: {
        FlashMessageService.showError(data);
        break;
      }

      case 401: {
        store.dispatch({ type: AuthTypes.LOGOUT });
        break;
      }

      default: {
        promise.reject(error);
      }
    }
  }
);

export default httpClient;
