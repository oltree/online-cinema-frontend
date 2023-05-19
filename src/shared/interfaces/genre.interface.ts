import { MaterialIconType } from '../types/icon.type';

export interface IGenre {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: MaterialIconType;
}
