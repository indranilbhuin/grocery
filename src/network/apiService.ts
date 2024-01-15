import axios from 'axios';

export const baseUrl = 'https://dummyjson.com';

const apiService = axios.create({
  baseURL: baseUrl,
  timeout: 2000,
});

export const apiNetwork = {
  get: (url: string, params?: any) => apiService.get(url, {params}),
  post: (url: string, data?: any) => apiService.post(url, data),
  delete: (url: string) => apiService.delete(url),
  put: (url: string, data?: any) => apiService.put(url, data),
  patch: (url: string, data?: any) => apiService.patch(url, data),
};
