import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { MovieService } from '@/services/movie.service';

import { getObjectKeys } from '@/utils/objects/getObjectKeys';

import { getAdminUrl } from '@/configs/url.config';

import { IMovieEditInput } from './movie-edit.enterface';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
  const { query, push } = useRouter();

  const movieId = String(query.id);

  const { isLoading } = useQuery(
    ['Movie', movieId],
    () => MovieService.getById(movieId),
    {
      onSuccess: data => {
        getObjectKeys(data).forEach(key => {
          setValue(key, data[key]);
        });
      },
      onError(error: string) {
        toastr.error(error, 'Get movie');
      },
      enabled: !!query.id,
    }
  );

  const { mutateAsync } = useMutation(
    'Update movie',
    (data: IMovieEditInput) => MovieService.update(movieId, data),
    {
      onSuccess() {
        toastr.success('Update movie', 'update was successful');
        push(getAdminUrl('movies'));
      },
      onError(error: string) {
        toastr.error(error, 'Update movie');
      },
    }
  );

  const onSubmit = async (data: IMovieEditInput) => await mutateAsync(data);

  return { onSubmit, isLoading };
};
