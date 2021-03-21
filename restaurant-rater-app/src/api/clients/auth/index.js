import httpClient from 'api/httpClient';

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

export const changePassword = async (request) => {
  return httpClient.put(`${baseUrl}/change-password`, request);
};
