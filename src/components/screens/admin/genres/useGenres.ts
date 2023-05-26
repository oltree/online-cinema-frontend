import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/components/ui/admin-table/admin-table.type';

import { useDebounce } from '@/hooks/useDebounce';

import { DEBOUNCE_DELAY } from '@/shared/constants/delays';
import { IGenre } from '@/shared/interfaces/genre.interface';

import { GenreService } from '@/services/genre.service';

import { getAdminUrl } from '@/configs/url.config';

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, DEBOUNCE_DELAY);
  const { push } = useRouter();

  const queryData = useQuery(
    ['Genre list', debouncedSearch],
    () => GenreService.getAllGenres(debouncedSearch),
    {
      select: data =>
        data.map(
          (genre: IGenre): ITableItem => ({
            _id: genre._id,
            editUrl: getAdminUrl(`genre/edit/${genre._id}`),
            items: [genre.name, genre.slug],
          })
        ),

      onError: (error: string) => {
        toastr.error(error, 'Genre list');
      },
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { mutateAsync: createAsync } = useMutation(
    'Create genre',
    () => GenreService.createGenre(),
    {
      onSuccess(data: string) {
        toastr.success('Create genre', 'Create genre successful');
        push(getAdminUrl(`genre/edit/${data}`));
      },
      onError: (error: string) => {
        toastr.error(error, 'Create genre');
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    'Delete genre',
    (genreId: string) => GenreService.deleteGenre(genreId),
    {
      onSuccess: () => {
        toastr.success('Delete genre', 'Delete genre successfully');
        queryData.refetch();
      },
      onError: (error: string) => {
        toastr.error(error, 'Delete genre');
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
