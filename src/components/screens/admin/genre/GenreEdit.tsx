import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';
import { SlugField } from '@/components/ui/slug-field';

import { generateUrlSlug } from '@/utils/text/generateUrlSlug';

import styles from './GenreEdit.module.scss';

import { IGenreEditInput } from './genre-edit.interface';
import { useGenreEdit } from './useGenreEdit';

const DynamicTextEditor = dynamic(
  () => import('@/components/ui/text-editor/TextEditor'),
  {
    ssr: false,
  }
);

const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IGenreEditInput>({ mode: 'onChange' });

  const { isLoading, onSubmit } = useGenreEdit(setValue);

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
                className={styles.input}
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

              <Field
                register={register('icon', {
                  required: 'Icon is required!',
                })}
                placeholder='Icon'
                error={errors.icon?.message}
                className={styles.input}
              />
            </div>

            <Controller
              control={control}
              name='description'
              defaultValue=''
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <DynamicTextEditor
                  value={value}
                  placeholder='Description'
                  onChange={onChange}
                  error={errors.description?.message}
                />
              )}
              rules={{
                validate: {
                  required: value =>
                    (value && stripHtml(value).result.length > 0) ||
                    'Description is required!',
                },
              }}
            />

            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default GenreEdit;
