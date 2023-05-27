import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';

import styles from './GenreEdit.module.scss';

import { IGenreEditInput } from './genre-edit.interface';
import { useGenreEdit } from './useGenreEdit';

const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<IGenreEditInput>({ mode: 'onChange' });

  const { isLoading, onSubmit } = useGenreEdit(setValue);

  return (
    <Meta title='Edit genre'>
      <AdminNavigation />
      <Heading title='Edit genre' />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? (
          <Loader count={3} />
        ) : (
          <>
            <div className={styles.fields}>
              <Field
                register={register('name', {
                  required: 'Name is required!',
                })}
                placeholder='Name'
                error={errors.name?.message}
                className={styles.input}
              />

              <Field
                register={register('icon', {
                  required: 'Icon is required!',
                })}
                placeholder='Icon'
                error={errors.icon?.message}
                className={styles.input}
              />

              <Button>Update</Button>
            </div>
          </>
        )}
      </form>
    </Meta>
  );
};

export default GenreEdit;
