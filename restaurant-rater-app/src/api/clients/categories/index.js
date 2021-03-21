import httpClient from 'api/httpClient';

const baseUrl = '/categories';

export const getCategories = async (request) => {
  const params = { ...request.filter, ...request.paging, ...request.sort };
  return httpClient.get(baseUrl, { params });
};

export const getCategory = async (id) => {
  return httpClient.get(`${baseUrl}/${id}`);
};

export const addCategory = async (request) => {
  return httpClient.post(baseUrl, request);
};

export const editCategory = async (id, request) => {
  return httpClient.post(`${baseUrl}/${id}`, request);
};

export const deleteCategory = async (id) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};
