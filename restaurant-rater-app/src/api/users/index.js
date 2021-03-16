import httpClient from '../httpClient';

const baseUrl = '/users';

export const deleteReview = async (id) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const editUser = async (id, request) => {
  return httpClient.post(`${baseUrl}/${id}`, request);
};

export const getUsers = async (request) => {
  const params = { ...request.filter, ...request.paging, ...request.sort };
  return httpClient.get(baseUrl, { params });
};

export const getUser = async (id) => {
  return httpClient.get(`${baseUrl}/${id}`);
};
