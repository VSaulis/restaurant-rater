import httpClient from 'api/httpClient';

const baseUrl = '/restaurants';

export const getRestaurants = async (request) => {
  const params = { ...request.filter, ...request.paging, ...request.sort };
  return httpClient.get(baseUrl, { params });
};

export const getRestaurant = async (id) => {
  return httpClient.get(`${baseUrl}/${id}`);
};

export const addRestaurant = async (request) => {
  return httpClient.post(baseUrl, { ...request, categoryId: 1 });
};

export const editRestaurant = async (id, request) => {
  return httpClient.post(`${baseUrl}/${id}`, request);
};

export const deleteRestaurant = async (id) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};
