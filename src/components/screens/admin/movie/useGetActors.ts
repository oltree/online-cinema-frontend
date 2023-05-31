import { useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { IOption } from '@/components/ui/select/select.interface';

import { ActorService } from '@/services/actor.service';

export const useGetActors = () => {
  const queryData = useQuery(
    'Get list of actors',
    () => ActorService.getAll(),
    {
      select: data =>
        data.map(
          (actor): IOption => ({
            label: actor.name,
            value: actor._id,
          })
        ),

      onError: (error: string) => {
        toastr.error(error, 'List of actors');
      },
    }
  );

  return queryData;
};
