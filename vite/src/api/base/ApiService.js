// src/services/ApiService.js

import axios from 'axios';

class ApiService {
  constructor(baseURL, timeout = 10000) {
    this.apiClient = axios.create({
      baseURL: baseURL || import.meta.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
      timeout: timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.apiClient.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log(`[API Request] ${config.method.toUpperCase()} - ${config.url}`);
        return config;
      },
      (error) => {
        console.error(`[API Request Error] ${error}`);
        return Promise.reject(error);
      }
    );

    this.apiClient.interceptors.response.use(
      (response) => {
        console.log(`[API Response] ${response.status} - ${response.config.url}`, response);
        return response;
      },
      (error) => {
        console.error(`[API Response Error] ${error.response?.status} - ${error.config?.url}`, error);
        if (error.response?.status === 401) {
          console.warn('Unauthorized - redirecting to login');
        }
        return Promise.reject(this.handleError(error));
      }
    );
  }

  handleError(error) {
    const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
    console.error(`[API Error] ${errorMessage}`);
    return {
      status: false,
      data: null,
      message: errorMessage
    };
  }

  async request(url, method, data = {}, options = {}) {
    try {
      const isFormData = data instanceof FormData;
      const headers = {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
        ...options.headers
      };

      const response = await this.apiClient({
        url,
        method,
        data,
        headers,
        ...options
      });

      return {
        status: true,
        data: response.data,
        message: 'Success'
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  get(url, options) {
    return this.request(url, 'get', null, options);
  }

  post(url, data, options) {
    return this.request(url, 'post', data, options);
  }

  put(url, data, options) {
    return this.request(url, 'put', data, options);
  }

  delete(url, options) {
    return this.request(url, 'delete', null, options);
  }
}

// Export an instance of ApiService for use in your application
const apiService = new ApiService();

export default apiService;
