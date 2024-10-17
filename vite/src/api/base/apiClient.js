// src/services/apiService.js

import axios from 'axios';

// Create an instance of axios
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com', // Base URL from environment variables
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT, 10) || 10000, // Default timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle errors and log them
const handleError = (error) => {
  const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
  console.error(`[API Error] ${errorMessage}`);
  return {
    status: false,
    data: null,
    message: errorMessage,
  };
};

// Interceptor to add token for each request if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // Log request details (for debugging purposes)
    console.log(`[API Request] ${config.method.toUpperCase()} - ${config.url}`);
    return config;
  },
  (error) => {
    // Log request error
    console.error(`[API Request Error] ${error}`);
    return Promise.reject(error);
  }
);

// Response Interceptor to handle responses and errors globally
apiClient.interceptors.response.use(
  (response) => {
    // Log response details
    console.log(`[API Response] ${response.status} - ${response.config.url}`, response);
    return response;
  },
  (error) => {
    // Log response error
    console.error(`[API Response Error] ${error.response?.status} - ${error.config?.url}`, error);
    
    // Handle specific status codes
    if (error.response?.status === 401) {
      // If unauthorized, handle token refresh or redirection
      console.warn('Unauthorized - redirecting to login');
    }

    return Promise.reject(handleError(error)); // Use handleError function
  }
);

// Generic function to make API requests
const makeApiRequest = async (url, method = 'get', data = {}, options = {}) => {
  try {
    // Determine content type based on the data type
    const isFormData = data instanceof FormData;
    
    // Set headers dynamically
    const headers = {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      ...options.headers, // Spread other headers passed in options
    };

    const response = await apiClient({
      url,
      method,
      data,
      headers, // Use dynamically determined headers
      ...options, // Spread other options like custom headers
    });

    return {
      status: true,
      data: response.data,
      message: 'Success',
    };
  } catch (error) {
    return handleError(error); // Use handleError function
  }
};

// Export the API service functions
export const apiService = {
  get: (url, options) => makeApiRequest(url, 'get', null, options),
  post: (url, data, options) => makeApiRequest(url, 'post', data, options),
  put: (url, data, options) => makeApiRequest(url, 'put', data, options),
  delete: (url, options) => makeApiRequest(url, 'delete', null, options),
};

export default apiClient; // Export the axios client if needed elsewhere
