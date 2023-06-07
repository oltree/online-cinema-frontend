import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { GenreService } from '@/services/genre.service';

import { getObjectKeys } from '@/utils/objects/getObjectKeys';

import { getAdminUrl } from '@/configs/url.config';

import { IGenreEditInput } from './genre-edit.interface';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
  const { push, query } = useRouter();

  const genreId = String(query.id);

  const { isLoading } = useQuery(
    ['Genre', genreId],
    () => GenreService.getById(genreId),
    {
      onSuccess: data => {
        getObjectKeys(data).forEach(key => setValue(key, data[key]));
      },

      onError: (error: string) => {
        toastr.error(error, 'Get genre');
      },

      enabled: !!query.id,
    }
  );

  const { mutateAsync } = useMutation(
    'Update genre',
    (data: IGenreEditInput) => GenreService.update(genreId, data),
    {
      onSuccess: () => {
        toastr.success('Update genre', 'Update genre successful');
        push(getAdminUrl('genres'));
      },

      onError: (error: string) => {
        toastr.error(error, 'Update genre');
      },
    }
  );

  const onSubmit = async (data: IGenreEditInput) => await mutateAsync(data);

  return { onSubmit, isLoading };
};
