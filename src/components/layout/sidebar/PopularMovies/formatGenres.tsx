import Link from 'next/link';

import { IGenre } from '@/shared/interfaces/genre.interface';

import { getGenreUrl } from '@/configs/url.config';

export const formatGenres = (genres: IGenre[]): string => {
  const formattedGenres = genres.map(genre => (
    <Link key={genre._id} href={getGenreUrl(genre.slug)}>
      {genre.name}
    </Link>
  ));

  return formattedGenres.join(', ');
};
