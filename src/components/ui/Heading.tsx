import cn from 'classnames';
import { FC } from 'react';

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ title, className }) => {
  const dynamicTextSize = className?.includes('xl') ? '' : 'text-3xl';

  return (
    <h1
      className={cn(
        `text-white text-opacity-80 font-semibold ${dynamicTextSize}`,
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Heading;
