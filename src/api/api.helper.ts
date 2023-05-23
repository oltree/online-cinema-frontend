export const getContentType = () => ({ 'Content-Type': 'application/json' });

export const getErrorMesssage = (error: any): string => {
  if (error.response?.data?.message) {
    const message = error.response.data.message;

    return typeof message === 'object' ? message[0] : message;
  }

  return error.message;
};
