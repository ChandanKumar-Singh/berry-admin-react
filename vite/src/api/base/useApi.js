import { useState, useCallback } from 'react';
import apiClient from './apiClient';

const useApi = (url, method = 'get', body = null, { token = true, headers = null } = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const config = {};

      // Add authorization token conditionally
      if (token) {
        const authToken = localStorage.getItem('token');
        if (authToken) {
          config.headers = {
            Authorization: `Bearer ${authToken}`,
          };
        }
      }
      if (headers) {
        config.headers = {
          ...config.headers,
          ...headers,
        };
      }

      const response = await apiClient[method](url, body, config);
      setData(response.data);
    } catch (err) {
      setError(err.message);
      alert(`Error: ${err.message}`); // Show alert on error
    } finally {
      setLoading(false);
    }
  }, [url, method, body, token, headers]);

  return { data, loading, error, fetchData };
};

export default useApi;
