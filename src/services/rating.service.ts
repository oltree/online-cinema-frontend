import api from '@/api/config';

import { getRatingsUrl } from '@/configs/api.config';

export const RatingService = {
  async setRating(movieId: string, value: number) {
    const response = await api.post<string>(getRatingsUrl('/set-rating'), {
      movieId,
      value,
    });

    return response?.data;
  },

  async getByUserMovie(movieId: string) {
    const response = await api.get<number>(getRatingsUrl(`/${movieId}`));

    return response?.data;
  },
};
