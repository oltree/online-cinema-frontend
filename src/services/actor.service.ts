import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface';

import { IActor } from '@/shared/interfaces/actor.interface';

import api from '@/api/config';

import { getActorsUrl } from '@/configs/api.config';

export const ActorService = {
  async getAll(searchTerm?: string) {
    const response = await api.get<IActor[]>(getActorsUrl('/'), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return response?.data;
  },

  async create() {
    const response = await api.post<string>(getActorsUrl('/'));

    return response?.data;
  },

  async delete(_id: string) {
    const response = await api.delete<string>(getActorsUrl(`/${_id}`));

    return response?.data;
  },

  async update(_id: string, data: IActorEditInput) {
    const response = await api.put<string>(getActorsUrl(`/${_id}`), data);

    return response?.data;
  },

  async getById(_id: string) {
    const response = await api.get<IActorEditInput>(getActorsUrl(`/${_id}`));

    return response?.data;
  },
};
