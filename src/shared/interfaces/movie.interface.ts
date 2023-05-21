import { IActor } from './actor.interface';
import { IGenre } from './genre.interface';
import { IParameters } from './parameters.interface';

export interface IMovie {
  _id: string;
  poster: string;
  bigPoster: string;
  title: string;
  parameters: IParameters;
  genres: IGenre[];
  actors: IActor[];
  countOpened: number;
  videoUrl: string;
  rating: number;
  slug: string;
}
