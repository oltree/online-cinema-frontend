import { toastr } from 'react-redux-toastr';

import { getErrorMesssage } from '@/api/config.helper';

export const showErrorNotification = (error: any, title?: string) => {
  const message = getErrorMesssage(error);
  toastr.error(title || 'Error request', message);
  throw message;
};
