import { FC, memo } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { Options } from 'react-select';
import ReactSelect, { OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated';

import styles from './Select.module.scss';

import { FieldProps } from '../field/Field';

import { IOption } from './select.interface';

interface SelectProps {
  options: Options<IOption>;
  field: ControllerRenderProps<any, any>;
  isMulti?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  error: string | undefined;
}

const animatedComponents = makeAnimated();

const Select: FC<SelectProps> = ({
  placeholder,
  error,
  isMulti,
  options,
  field,
  isLoading,
}) => {
  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    field.onChange(
      isMulti
        ? (newValue as IOption[]).map((item: IOption) => item.value)
        : (newValue as IOption).value
    );
  };

  const getValue = () => {
    if (field.value) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : ('' as any);
    }
  };

  return (
    <div className={styles.selectContainer}>
      <label>
        <span>{placeholder}</span>
        <ReactSelect
          classNamePrefix='custom-select'
          placeholder={''}
          options={options}
          value={getValue()}
          onChange={onChange}
          isMulti={isMulti}
          components={animatedComponents}
          isLoading={isLoading}
        />
      </label>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default memo(Select);
