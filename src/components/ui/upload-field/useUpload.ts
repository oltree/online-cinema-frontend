import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UPLOAD_DELAY } from '@/shared/constants/delays';
import { OnChangeType } from '@/shared/types/onChange.type';

import { FileService } from '@/services/file.service';

export const useUpload = (onChange: OnChangeType, folder?: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation(
    'Upload file',
    (data: FormData) => FileService.upload(data, folder),
    {
      onSuccess: data => {
        onChange(data[0].url);
      },
      onError: (error: string) => {
        toastr.error(error, 'Upload file');
      },
    }
  );

  const uploadFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);

      const files = e.target.files;

      if (files?.length) {
        const formData = new FormData();
        formData.append('image', files[0]);

        await mutateAsync(formData);

        setTimeout(() => setIsLoading(false), UPLOAD_DELAY);
      }
    },
    [mutateAsync]
  );

  return useMemo(() => ({ isLoading, uploadFile }), [isLoading, uploadFile]);
};
