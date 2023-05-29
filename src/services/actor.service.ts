import { IActor } from '@/shared/interfaces/actor.interface';

import api from '@/api/api';

import { getActorsUrl } from '@/configs/api.config';

export const ActorService = {
  async getAllActors(searchTerm?: string) {
    const response = await api.get<IActor[]>(getActorsUrl('/'), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return response?.data;
  },

  async createActor() {
    const response = await api.post<string>(getActorsUrl('/'));

    return response?.data;
  },

  async deleteActor(_id: string) {
    const response = await api.delete<string>(getActorsUrl(`/${_id}`));

    return response?.data;
  },
};
