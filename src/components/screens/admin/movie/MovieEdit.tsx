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
import { UploadField } from '@/components/ui/upload-field';

import { generateUrlSlug } from '@/utils/text/generateUrlSlug';

import { IMovieEditInput } from './movie-edit.enterface';
import { useGetActors } from './useGetActors';
import { useGetGenres } from './useGetGenres';
import { useMovieEdit } from './useMovieEdit';

const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
  ssr: false,
});

export const MovieEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IMovieEditInput>({ mode: 'onChange' });

  const { isLoading, onSubmit } = useMovieEdit(setValue);

  const { isLoading: isGenresLoading, data: genres } = useGetGenres();
  const { isLoading: isActorsLoading, data: actors } = useGetActors();

  return (
    <Meta title='Edit movie'>
      <AdminNavigation />
      <Heading title='Edit movie' />
      {isLoading ? (
        <Loader count={5} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center flex-wrap justify-between gap-1'>
            <Field
              register={register('title', {
                required: 'Title is required!',
              })}
              placeholder='Title'
              error={errors.title?.message}
            />

            <SlugField
              register={register('slug', {
                required: 'Slug is required!',
              })}
              generate={() => {
                setValue('slug', generateUrlSlug(getValues('title')));
              }}
              placeholder='Slug'
              error={errors.slug?.message}
            />

            <Field
              register={register('parameters.country', {
                required: 'Country is required!',
              })}
              placeholder='Country'
              error={errors.parameters?.country?.message}
            />

            <Field
              register={register('parameters.duration', {
                required: 'Duration is required!',
              })}
              placeholder='Duration (min.)'
              error={errors.parameters?.duration?.message}
            />

            <Field
              register={register('parameters.year', {
                required: 'Year is required!',
              })}
              placeholder='Year'
              error={errors.parameters?.year?.message}
            />
          </div>

          <Controller
            name='genres'
            control={control}
            render={({ field, formState: { errors } }) => (
              <DynamicSelect
                field={field}
                options={genres || []}
                isLoading={isGenresLoading}
                isMulti
                placeholder='Genres'
                error={errors.genres?.message}
              />
            )}
            rules={{
              required: 'Please select at least one genre!',
            }}
          />

          <Controller
            name='actors'
            control={control}
            render={({ field, formState: { errors } }) => (
              <DynamicSelect
                field={field}
                options={actors || []}
                isLoading={isActorsLoading}
                isMulti
                placeholder='Actors'
                error={errors.actors?.message}
              />
            )}
            rules={{
              required: 'Please select at least one actor!',
            }}
          />

          <Controller
            name='poster'
            control={control}
            defaultValue=''
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <UploadField
                value={value}
                onChange={onChange}
                error={errors.poster?.message}
                folder='movies'
                placeholder='Poster'
              />
            )}
            rules={{
              required: 'Poster is required!',
            }}
          />

          <Controller
            name='bigPoster'
            control={control}
            defaultValue=''
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <UploadField
                value={value}
                onChange={onChange}
                error={errors.bigPoster?.message}
                folder='movies'
                placeholder='Big poster'
              />
            )}
            rules={{
              required: 'Big poster is required!',
            }}
          />

          <Controller
            name='videoUrl'
            control={control}
            defaultValue=''
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <UploadField
                value={value}
                onChange={onChange}
                error={errors.videoUrl?.message}
                folder='movies'
                placeholder='Video'
              />
            )}
            rules={{
              required: 'Video is required!',
            }}
          />

          <Button>Update</Button>
        </form>
      )}
    </Meta>
  );
};
