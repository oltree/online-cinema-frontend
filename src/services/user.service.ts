import { IUser } from '@/shared/interfaces/user.interface';

import api from '@/api/api';

import { getUsersUrl } from '@/configs/api.config';

export const UserService = {
  async getAllUsers(searchTerm: string) {
    const response = await api.get<IUser[]>(getUsersUrl(''), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return response?.data;
  },

  async deleteUser(userId: string) {
    const response = await api.delete(getUsersUrl(`/${userId}`));

    return response;
  },
};
