export const apiErrorHandler = (error) => {
    let message = 'Something went wrong';
  
    if (error.response) {
      switch (error.response.status) {
        case 400:
          message = 'Bad Request';
          break;
        case 401:
          message = 'Unauthorized';
          break;
        case 403:
          message = 'Forbidden';
          break;
        case 404:
          message = 'Not Found';
          break;
        case 500:
          message = 'Internal Server Error';
          break;
        default:
          message = error.response.data?.message || message;
          break;
      }
    } else if (error.request) {
      message = 'No response from the server';
    }
  
    return message;
  };
  