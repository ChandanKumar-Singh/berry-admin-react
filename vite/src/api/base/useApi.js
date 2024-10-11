import { useState, useCallback } from 'react';
import makeApiRequest from './makeApiRequest';

const useApi = (initialUrl, method = 'get', initialData = null, options = {}) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (url = initialUrl, body = null) => {
      setLoading(true);
      setError(null);

      const response = await makeApiRequest(url, method, body, options);
      if (response.status) {
        setData(response.data);
      } else {
        setError(response.message);
      }

      setLoading(false);
    },
    [initialUrl, method, options]
  );

  return { data, loading, error, fetchData };
};

export default useApi;
