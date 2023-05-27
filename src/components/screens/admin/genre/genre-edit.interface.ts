import { IGenre } from '@/shared/interfaces/genre.interface';

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}
