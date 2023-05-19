import { MaterialIconType } from '@/shared/types/icon.type';

export interface IMenuItem {
  icon: MaterialIconType;
  title: string;
  link: string;
}

export interface IMenu {
  title: string;
  items: IMenuItem[];
}
