import cn from 'classnames';
import Image from 'next/image';
import { CSSProperties, FC, memo } from 'react';

import { OnChangeType } from '@/shared/types/onChange.type';

import styles from './UploadField.module.scss';

import { Loader } from '../loader';

import { useUpload } from './useUpload';

interface UploadFieldProps {
  placeholder: string;
  onChange: OnChangeType;
  folder?: string;
  value?: string;
  error?: string | undefined;
  className?: string;
  isNoImage?: boolean;
}

export const UploadField: FC<UploadFieldProps> = memo(
  ({
    placeholder,
    onChange,
    folder,
    value,
    error,
    className,
    isNoImage = false,
  }) => {
    const { isLoading, uploadFile } = useUpload(onChange, folder);

    return (
      <div className={cn(styles.field, styles.uploadField, className)}>
        <div className={styles.uploadFlex}>
          <label>
            <span>{placeholder}</span>
            <input type='file' onChange={uploadFile} />
            {error && <div className={styles.error}>{error}</div>}
          </label>
          {!isNoImage && (
            <div className={styles.uploadImageContainer}>
              {isLoading ? (
                <Loader count={1} className='w-full h-full' />
              ) : (
                value && <Image src={value} alt='' layout='fill' unoptimized />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
