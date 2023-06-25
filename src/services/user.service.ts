import { IProfileInput } from '@/components/screens/profile/profile.interface';

import { IMovie } from '@/shared/interfaces/movie.interface';
import { IUser } from '@/shared/interfaces/user.interface';

import api from '@/api/config';

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

  async getUser(_id: string) {
    const response = await api.get<IUser>(getUsersUrl(`/${_id}`));

    return response?.data;
  },

  async update(_id: string, data: IProfileInput) {
    const response = await api.put<string>(getUsersUrl(`/${_id}`), data);

    return response?.data;
  },

  async delete(_id: string) {
    const response = await api.delete<string>(getUsersUrl(`/${_id}`));

    return response;
  },

  async getProfile() {
    const response = await api.get<IUser>(getUsersUrl('/profile'));

    return response?.data;
  },

  async updateProfile(data: IProfileInput) {
    const response = await api.put<string>(getUsersUrl('/profile'), data);

    return response?.data;
  },

  async getFavorites() {
    const response = await api.get<IMovie[]>(getUsersUrl('/profile/favorites'));

    return response?.data;
  },

  async toggleFavorite(movieId: string) {
    const response = await api.post(getUsersUrl('/profile/favorites'), {
      movieId,
    });

    return response?.data;
  },
};
