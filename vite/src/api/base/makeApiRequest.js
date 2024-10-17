import apiClient from "./apiClient";

const makeApiRequest = async (url, method = 'get', data = {}, options = {}) => {
    try {
      const response = await apiClient({
        url,
        method,
        data,
        ...options, // Spread other options like custom headers
      });
  
      return {
        status: true,
        data: response.data,
        message: 'Success',
      };
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
      console.error(`[API Error] ${errorMessage}`);
      return {
        status: false,
        data: null,
        message: errorMessage,
      };
    }
  };
  
  export default makeApiRequest;
  