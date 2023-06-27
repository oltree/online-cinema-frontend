import cn from 'classnames';
import { FC } from 'react';

import styles from './Arrow.module.scss';

import { MaterialIcon } from '../../material-icon';

interface ISlideArrow {
  variant: 'left' | 'right';
  clickHandler: () => void;
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
  const isLeft = variant === 'left';

  return (
    <button
      aria-label={isLeft ? 'movie left' : 'movie right'}
      onClick={clickHandler}
      className={cn(styles.arrow, {
        [styles.left]: isLeft,
        [styles.right]: !isLeft,
      })}
    >
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  );
};

export default SlideArrow;
