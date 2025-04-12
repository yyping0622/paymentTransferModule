import { COLORS_THEME, theme } from '../styles/theme';
import { getObjectKey } from '../utils/StyledTextUtil';

type ColorsMap = typeof COLORS_THEME;
type ColorsName = keyof ColorsMap;
let currentColor: ColorsName = 'colors';

export type COLORS = ColorsMap[ColorsName];

export const getColorCode = (key: PathInto<COLORS>): string =>
  getObjectKey(theme[currentColor], key.split('.'));

export type PathInto<T extends Record<string, any>> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, any>
    ? `${K & string}.${PathInto<T[K]> & string}`
    : never]: any;
};
