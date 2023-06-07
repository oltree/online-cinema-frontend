import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ActorService } from '@/services/actor.service';

import { getObjectKeys } from '@/utils/objects/getObjectKeys';

import { getAdminUrl } from '@/configs/url.config';

import { IActorEditInput } from './actor-edit.interface';

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
  const { push, query } = useRouter();

  const actorId = String(query.id);

  const { isLoading } = useQuery(
    ['Actor', actorId],
    () => ActorService.getById(actorId),
    {
      onSuccess: data => {
        getObjectKeys(data).forEach(key => setValue(key, data[key]));
      },

      onError: (error: string) => {
        toastr.error(error, 'Get actor');
      },

      enabled: !!query.id,
    }
  );

  const { mutateAsync } = useMutation(
    'Update actor',
    (data: IActorEditInput) => ActorService.update(actorId, data),
    {
      onSuccess: () => {
        toastr.success('Update actor', 'Update actor successful');
        push(getAdminUrl('actors'));
      },

      onError: (error: string) => {
        toastr.error(error, 'Update actor');
      },
    }
  );

  const onSubmit = async (data: IActorEditInput) => await mutateAsync(data);

  return { onSubmit, isLoading };
};
