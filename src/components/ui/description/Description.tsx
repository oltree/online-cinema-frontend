import parse from 'html-react-parser';
import { FC, memo } from 'react';

interface DescriptionProps {
  text: string;
  className?: string;
}

export const Description: FC<DescriptionProps> = memo(({ text, className }) => (
  <div
    className={`mb-10 text-lg font-light text-white text-opacity-60 ${className}`}
  >
    {parse(text)}
  </div>
));
