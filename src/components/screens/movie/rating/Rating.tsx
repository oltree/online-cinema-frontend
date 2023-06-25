import { FC, memo } from 'react';
import StarRating from 'react-star-rating-component';

import { AuthButton } from '@/components/ui/auth-button';

import { useAuth } from '@/hooks/useAuth';

import styles from './Rating.module.scss';

import { useRating } from './useRating';

interface RatingProps {
  slug: string;
  id: string;
}

const Rating: FC<RatingProps> = memo(({ slug, id }) => {
  const { user } = useAuth();
  const { rating, isSended, onClick } = useRating(id);

  return (
    <div className={styles.wrapper}>
      <h3>How do you like the movie?</h3>
      <p>Ratings improve recommendations</p>
      {user ? (
        <>
          {isSended ? (
            <div className={styles.thanks}>Thanks for rating!</div>
          ) : (
            <StarRating
              name='star-rating'
              value={rating}
              onStarClick={onClick}
              emptyStarColor='#4f4f4f'
            />
          )}
        </>
      ) : (
        <AuthButton slug={slug} />
      )}
    </div>
  );
});

export default Rating;
