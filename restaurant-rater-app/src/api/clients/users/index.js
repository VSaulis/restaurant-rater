import httpClient from 'api/httpClient';

const baseUrl = '/users';

export const deleteUser = async (id) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const editUser = async (id, request) => {
  return httpClient.put(`${baseUrl}/${id}`, request);
};

export const getUsers = async (request) => {
  const params = { ...request.filter, ...request.paging, ...request.sort };
  return httpClient.get(baseUrl, { params });
};

export const getUser = async (id) => {
  return httpClient.get(`${baseUrl}/${id}`);
};
