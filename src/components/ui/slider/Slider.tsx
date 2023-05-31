import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Slider.module.scss';

import SlideItem from './SlideItem';
import Arrow from './arrow/Arrow';
import { ISlide } from './slider.interface';
import { useSlider } from './useSlider';

interface ISlider {
  buttonTitle?: string;
  slides: ISlide[];
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
  const { onClick, index, isNext, isPrev, slideIn } = useSlider(slides.length);

  return (
    <div className={styles.slider}>
      {isPrev && <Arrow variant='left' clickHandler={() => onClick('prev')} />}

      <CSSTransition
        in={slideIn}
        timeout={300}
        classNames='slide-animation'
        unmountOnExit
      >
        <SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
      </CSSTransition>

      {isNext && <Arrow variant='right' clickHandler={() => onClick('next')} />}
    </div>
  );
};

export default Slider;
