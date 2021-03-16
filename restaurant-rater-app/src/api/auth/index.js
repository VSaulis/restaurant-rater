import httpClient from '../httpClient';

const baseUrl = '/authentication';

export const login = async (request) => {
  return httpClient.post(`${baseUrl}/login`, request);
};

export const register = async (request) => {
  return httpClient.post(`${baseUrl}/register`, request);
};

export const getLoggedUser = async () => {
  return httpClient.get(`${baseUrl}/logged-user`);
};
