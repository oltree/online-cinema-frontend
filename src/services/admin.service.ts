import api from '@/api/api';

import { getUsersUrl } from '@/configs/api.config';

export const AdminService = {
  async getUserCount() {
    const response = await api.get<number>(getUsersUrl('/count'));

    return response?.data;
  },
};
