import httpClient from 'api/httpClient';

const baseUrl = '/replies';

export const addReply = async (request) => {
  return httpClient.post(baseUrl, request);
};

export const getReplies = async (request) => {
  const params = { ...request.filter, ...request.paging, ...request.sort };
  return httpClient.get(baseUrl, { params });
};

export const getReply = async (id) => {
  return httpClient.get(`${baseUrl}/${id}`);
};

export const editReply = async (id, request) => {
  return httpClient.post(`${baseUrl}/${id}`, request);
};

export const deleteReply = async (id) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};
