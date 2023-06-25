import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { DEFAULT_DELAY } from '@/shared/constants/delays';

import { RatingService } from '@/services/rating.service';

export const useRating = (movieId: string) => {
  const [rating, setRating] = useState(0);
  const [isSended, setIsSended] = useState(false);

  const { refetch } = useQuery(
    ['Your movie rating', movieId],
    () => RatingService.getByUserMovie(movieId),
    {
      onSuccess(data) {
        setRating(data);
      },

      enabled: !!movieId,
    }
  );

  const { mutateAsync: rateMovie } = useMutation(
    'Set rating movie',
    ({ value }: { value: number }) => RatingService.setRating(movieId, value),
    {
      onSuccess() {
        setIsSended(true);
        refetch();

        setTimeout(() => {
          setIsSended(false);
        }, DEFAULT_DELAY);
      },

      onError(error: string) {
        toastr.error(error, 'Rate movie');
      },
    }
  );

  const onClick = async (nextValue: number) => {
    setRating(nextValue);

    await rateMovie({ value: nextValue });
  };

  return {
    rating,
    isSended,
    onClick,
  };
};
