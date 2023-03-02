import { NationList } from './nation-list';
import { LocaleList } from './locale-list';

export type TypeIcons = {
  contour: string;
  contour_alive: string;
  contour_dead: string;
  default: string;
  large: string;
  local_contour: string;
  local_contour_alive: string;
  local_contour_dead: string;
  local_small: string;
  medium: string;
  small: string;
};

export type TypeShipItem = {
  icons: TypeIcons;
  level: number;
  localization: {
    shortmark: Record<LocaleList, string>;
    description: Record<LocaleList, string>;
    mark: Record<LocaleList, string>;
  };
  name: string;
  nation: NationList;
  tags: string[];
};
export type TypeResponseData = Record<number, TypeShipItem>;
