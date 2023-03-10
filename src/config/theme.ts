import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    colors: {
      black: '#000',
      blackOpacity1: 'rgba(0, 0, 0, 0.1)',
      blackOpacity3: 'rgba(0, 0, 0, 0.3)',
      blackOpacity5: 'rgba(0, 0, 0, 0.5)',
      blackOpacity9: 'rgba(0, 0, 0, 0.9)',
      error50: '#FFEBEE',
      error200: '#EF9A9A',
      error400: '#EF5350',
      error600: '#E53935',
      error800: '#C62828',
      gray50: '#fafafa',
      gray100: '#f5f5f5',
      gray200: '#eeeeee',
      gray300: '#e0e0e0',
      gray400: '#bdbdbd',
      gray500: '#9e9e9e',
      gray600: '#757575',
      gray700: '#616161',
      gray800: '#424242',
      gray900: '#212121',
      primary50: '#e5f5ea',
      primary100: '#bfe5cc',
      primary200: '#96d4ac',
      primary300: '#69c48c',
      primary400: '#43b874',
      primary500: '#04ab5c',
      primary600: '#009d52',
      primary700: '#008b46',
      primary800: '#00793b',
      primary900: '#005a27',

      secondary50: '#fff8e0',
      secondary100: '#feedb0',
      secondary200: '#fee17c',
      secondary300: '#fdd644',
      secondary400: '#fdcc06',
      secondary500: '#fdc300',
      secondary600: '#feb400',
      secondary700: '#ffa100',
      secondary800: '#ff8f00',
      secondary900: '#ff6d00',

      success50: '#E8F5E9',
      success200: '#A5D6A7',
      success400: '#66BB6A',
      success600: '#43A047',
      success800: '#2E7D32',

      white: '#fff',
    },
    fonts: {
      roboto: 'Roboto',
    },
    fontSizes: {
      1: '1.2rem',
      2: '1.4rem',
      3: '1.6rem',
      4: '2rem',
      5: '2.4rem',
      6: '2.8rem',
      7: '3.2rem',
    },

    media: {
      lg: '(min-width: 1200px)',
      md: '(min-width: 900px)',
      sm: '(min-width: 600px)',
      xl: '(min-width: 1536px)',
      xs: '(min-width: 0px)',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      round: '50%',
    },
    shadows: {
      1: '0 2px 4px 0px rgba(0, 0, 0, 0.2)',
    },
    space: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      5: '32px',
      6: '64px',
    },
    transitions: {
      easeInOut02: 'all 0.2s ease-in-out',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value,
      marginTop: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom: value,
      paddingTop: value,
    }),
  },
});
