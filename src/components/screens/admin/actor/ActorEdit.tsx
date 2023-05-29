import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';
import { SlugField } from '@/components/ui/slug-field';
import { UploadField } from '@/components/ui/upload-field/UploadField';

import { generateUrlSlug } from '@/utils/text/generateUrlSlug';

import { IActorEditInput } from './actor-edit.interface';
import { useActorEdit } from './useActorEdit';

const ActorEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IActorEditInput>({ mode: 'onChange' });

  const { isLoading, onSubmit } = useActorEdit(setValue);

  return (
    <Meta title='Edit genre'>
      <AdminNavigation />
      <Heading title='Edit genre' />
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <Loader count={3} />
        ) : (
          <>
            <div className='flex items-center flex-wrap justify-between'>
              <Field
                register={register('name', {
                  required: 'Name is required!',
                })}
                placeholder='Name'
                error={errors.name?.message}
              />

              <SlugField
                register={register('slug', {
                  required: 'Slug is required!',
                })}
                generate={() => {
                  setValue('slug', generateUrlSlug(getValues('name')));
                }}
                placeholder='Slug'
                error={errors.slug?.message}
              />

              <Controller
                control={control}
                name='photo'
                defaultValue=''
                render={({
                  field: { value, onChange },
                  formState: { errors },
                }) => (
                  <UploadField
                    value={value}
                    onChange={onChange}
                    error={errors.photo?.message}
                    folder='actors'
                    placeholder='Photo'
                  />
                )}
                rules={{
                  required: 'Photo is required!',
                }}
              />
            </div>

            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default ActorEdit;
