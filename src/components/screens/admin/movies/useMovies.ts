import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/components/ui/admin-table/admin-table.type';

import { useDebounce } from '@/hooks/useDebounce';

import { DEBOUNCE_DELAY } from '@/shared/constants/delays';
import { IMovie } from '@/shared/interfaces/movie.interface';

import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/getGenresList';

import { getAdminUrl } from '@/configs/url.config';

export const useMovies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, DEBOUNCE_DELAY);
  const { push } = useRouter();

  const queryData = useQuery(
    ['Movie list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: data =>
        data.map(
          (movie: IMovie): ITableItem => ({
            _id: movie._id,
            editUrl: getAdminUrl(`/movie/edit/${movie._id}`),
            items: [
              movie.title,
              getGenresList(movie.genres),
              String(movie.rating),
            ],
          })
        ),

      onError: (error: string) => {
        toastr.error(error, 'Movie list');
      },
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { mutateAsync: createAsync } = useMutation(
    'Create movie',
    () => MovieService.create(),
    {
      onSuccess(data: string) {
        toastr.success('Create movie', 'Create movie successful');
        push(getAdminUrl(`movie/edit/${data}`));
      },
      onError: (error: string) => {
        toastr.error(error, 'Create movie');
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    'Delete movie',
    (movieId: string) => MovieService.delete(movieId),
    {
      onSuccess: () => {
        toastr.success('Delete movie', 'Delete movie successfully');
        queryData.refetch();
      },
      onError: (error: string) => {
        toastr.error(error, 'Delete movie');
      },
    }
  );

  return useMemo(
    () => ({
      searchTerm,
      ...queryData,
      handleSearch,
      deleteAsync,
      createAsync,
    }),
    [searchTerm, queryData, deleteAsync, createAsync]
  );
};
