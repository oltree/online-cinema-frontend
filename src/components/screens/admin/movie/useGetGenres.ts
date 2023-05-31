import { useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { IOption } from '@/components/ui/select/select.interface';

import { GenreService } from '@/services/genre.service';

export const useGetGenres = () => {
  const queryData = useQuery(
    'Get list of genres',
    () => GenreService.getAll(),
    {
      select: data =>
        data.map(
          (genre): IOption => ({
            label: genre.name,
            value: genre._id,
          })
        ),

      onError: (error: string) => {
        toastr.error(error, 'List of genres');
      },
    }
  );

  return queryData;
};
