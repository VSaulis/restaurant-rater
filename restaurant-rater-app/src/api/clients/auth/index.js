import httpClient from 'api/httpClient';

const baseUrl = '/authentication';

export const login = async (request) => {
  return httpClient.post(`${baseUrl}/login`, request);
};

export const register = async (request) => {
  return httpClient.post(`${baseUrl}/register`, request);
};

export const changePassword = async (request) => {
  return httpClient.put(`${baseUrl}/change-password`, request);
};

export const deleteAccount = async () => {
  return httpClient.delete(`${baseUrl}/delete-account`);
};
