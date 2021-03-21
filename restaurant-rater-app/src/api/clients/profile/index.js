import httpClient from 'api/httpClient';

const baseUrl = '/profile';

export const getProfile = async () => {
  return httpClient.get(`${baseUrl}`);
};

export const editProfile = async (request) => {
  return httpClient.put(`${baseUrl}`, request);
};
