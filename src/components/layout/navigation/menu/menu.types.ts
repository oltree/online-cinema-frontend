import { MaterialIconType } from '@/shared/types/icon.type';

export interface IMenuItem {
  icon: MaterialIconType;
  title: string;
  link: string;
  isAuth?: boolean;
  isAdmin?: boolean;
}

export interface IMenu {
  title: string;
  items: IMenuItem[];
}
