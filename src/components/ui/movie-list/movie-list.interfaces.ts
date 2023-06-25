import { IMovie } from '@/shared/interfaces/movie.interface';

export interface IWidgetMovie
  extends Pick<
    IMovie,
    '_id' | 'genres' | 'poster' | 'title' | 'rating' | 'slug'
  > {}

export interface IMovieList {
  title: string;
  link: string;
  movies: IWidgetMovie[];
}
