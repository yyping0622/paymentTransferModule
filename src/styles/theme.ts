export const COLORS_THEME = {
  colors: {
    primary: {
      _500: '#3b5aff',
      _400: '#6b82ff'
    },
    secondary: {
      _500: '#101841',
    },
    neutral: {
      _700: '#000000',
      _600: '#8F8F8F',
      _500: '#AEAEAE',
      _400: '#CECECE',
      _300: '#EDEDED',
      _200: '#F9F9F9',
      _100: '#FFFFFF',
    },
    general: {
      grey: '#D9D9D9',
      midGrey: '#929292',
      buttonGrey: '#4A4A4A',
    },
    error: {
      _400: '#FF3742',
      _500: '#CC2C35',
    },
    background: {
      light: '#FFFFFF',
      dark: '#000000',
      grey: '#F9F9F9',
    },
    onBackground: {
      darkLight: '#000000D9',
      whiteLight: '#FFFFFFE6',
    },
    others: {
      BLACK_13: '#00000021',
    },
    YELLOW: {
      _100: '#FFF8E4',
      _200: '#FCF3AD',
      _500: '#FFDE02',
      _600: '#FFC602',
      _700: '#F1A03E',
      _800: '#8C5600',
    },
    RED: {
      _400: '#FF3743',
      _500: '#CC2B36',
    },
  },
};

export const theme = {
  colors: {
    ...COLORS_THEME.colors,
  },
  fonts: {
    size: {
      DISPLAY_LARGE: 56,
      DISPLAY_MEDIUM: 42,
      DISPLAY_SMALL: 34,
      HEADLINE_LARGE: 30,
      HEADLINE_MEDIUM: 28,
      HEADLINE_SMALL: 24,
      TITLE_LARGE: 22,
      TITLE_MEDIUM: 16,
      TITLE_SMALL: 14,
      LABEL_LARGE: 14,
      LABEL_MEDIUM_LARGE: 13,
      LABEL_MEDIUM: 12,
      LABEL_SMALL: 11,
      LABEL_XTRA_SMALL: 10,
      BODY_LARGE: 16,
      BODY_MEDIUM: 14,
      BODY_SMALL: 12,
    },
  },
};

export enum VARIANT_TYPES {
  DISPLAY_LARGE = 'DISPLAY_LARGE',
  DISPLAY_MEDIUM = 'DISPLAY_MEDIUM',
  DISPLAY_SMALL = 'DISPLAY_SMALL',
  HEADLINE_LARGE = 'HEADLINE_LARGE',
  HEADLINE_MEDIUM = 'HEADLINE_MEDIUM',
  HEADLINE_SMALL = 'HEADLINE_SMALL',
  TITLE_LARGE = 'TITLE_LARGE',
  TITLE_MEDIUM = 'TITLE_MEDIUM',
  TITLE_SMALL = 'TITLE_SMALL',
  LABEL_LARGE = 'LABEL_LARGE',
  LABEL_MEDIUM_LARGE = 'LABEL_MEDIUM_LARGE',
  LABEL_MEDIUM = 'LABEL_MEDIUM',
  LABEL_SMALL = 'LABEL_SMALL',
  LABEL_XTRA_SMALL = 'LABEL_XTRA_SMALL',
  BODY_LARGE = 'BODY_LARGE',
  BODY_MEDIUM = 'BODY_MEDIUM',
  BODY_SMALL = 'BODY_SMALL',
}
