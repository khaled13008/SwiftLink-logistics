import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  },

  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { name, email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export const packageService = {
  trackPackage: async (trackingNumber: string) => {
    const response = await api.get(`/packages/${trackingNumber}`);
    return response.data;
  },

  createPackage: async (packageData: any) => {
    const response = await api.post('/packages', packageData);
    return response.data;
  },

  updatePackageStatus: async (trackingNumber: string, status: string) => {
    const response = await api.patch(`/packages/${trackingNumber}/status`, { status });
    return response.data;
  },
};

export default api;