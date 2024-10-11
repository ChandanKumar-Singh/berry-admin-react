import axios from 'axios';

/// API base URL
const BASE_URL = 'https://api.example.com';

/// Create Axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, /// Timeout for requests (ms)
  headers: {
    'Content-Type': 'application/json'
  }
});

/// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    /// You can add authorization tokens here
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    /// Log request
    console.log('Request:', config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    /// Log response
    console.log('Response:', response);

    return {
      status: true,
      data: response.data,
      message: 'Request successful'
    };
  },
  (error) => {
    console.error('API Error:', error);

    let message = 'Something went wrong';
    if (error.response) {
      /// Customize the error message based on the error response
      message = error.response.data?.message || message;
    }

    return {
      status: false,
      data: null,
      message
    };
  }
);

export default apiClient;
