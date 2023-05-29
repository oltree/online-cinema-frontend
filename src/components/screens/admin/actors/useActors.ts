import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/components/ui/admin-table/admin-table.type';

import { useDebounce } from '@/hooks/useDebounce';

import { DEBOUNCE_DELAY } from '@/shared/constants/delays';
import { IActor } from '@/shared/interfaces/actor.interface';

import { ActorService } from '@/services/actor.service';

import { getAdminUrl } from '@/configs/url.config';

export const useActors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, DEBOUNCE_DELAY);
  const { push } = useRouter();

  const queryData = useQuery(
    ['Actor list', debouncedSearch],
    () => ActorService.getAll(debouncedSearch),
    {
      select: data =>
        data.map(
          (actor: IActor): ITableItem => ({
            _id: actor._id,
            editUrl: getAdminUrl(`actor/edit/${actor._id}`),
            items: [actor.name, String(actor.countMovies)],
          })
        ),

      onError: (error: string) => {
        toastr.error(error, 'Actor list');
      },
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { mutateAsync: createAsync } = useMutation(
    'Create actor',
    () => ActorService.create(),
    {
      onSuccess(data: string) {
        toastr.success('Create actor', 'Create actor successful');
        push(getAdminUrl(`actor/edit/${data}`));
      },
      onError: (error: string) => {
        toastr.error(error, 'Create actor');
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    'Delete actor',
    (actorId: string) => ActorService.delete(actorId),
    {
      onSuccess: () => {
        toastr.success('Delete actor', 'Delete actor successfully');
        queryData.refetch();
      },
      onError: (error: string) => {
        toastr.error(error, 'Delete actor');
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
