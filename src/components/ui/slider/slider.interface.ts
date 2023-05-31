import { IMovie } from '@/shared/interfaces/movie.interface';

export interface ISlide extends Pick<IMovie, '_id' | 'bigPoster' | 'title'> {
  link: string;
  subTitle: string;
}
