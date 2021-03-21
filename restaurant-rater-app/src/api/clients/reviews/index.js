import httpClient from 'api/httpClient';

const baseUrl = '/reviews';

export const getReview = async (id) => {
  return httpClient.get(`${baseUrl}/${id}`);
};

export const getReviews = async (request) => {
  const params = { ...request.filter, ...request.paging, ...request.sort };
  return httpClient.get(baseUrl, { params });
};

export const addReview = async (request) => {
  return httpClient.post(baseUrl, request);
};

export const editReview = async (id, request) => {
  return httpClient.post(`${baseUrl}/${id}`, request);
};

export const deleteReview = async (id) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};
