import { globalCss } from './theme';

export const globalStyles = globalCss({
  '@import': "url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')",

  ':root': {
    fontSize: '62.5%',
  },

  '*, &::after, &::before': {
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: '$roboto',
    margin: 0,
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '360px',
    wordBreak: 'normal',
    wordWrap: 'break-word',
  },

  'button, div,a': {
    outline: 'none',
  },

  /* ------------------ */
  /* Select Shadows */
  '::-moz-selection': {
    backgroundColor: '$blackOpacity5',
  },
  '::selection': {
    backgroundColor: '$blackOpacity3',
  },

  /* ------------------ */
  /* Scrollbar */
  '::-webkit-scrollbar': {
    height: '6px',
    width: '6px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$primary400',
  },
  '::-webkit-scrollbar-thumb:window-inactive': {
    backgroundColor: '$secondary400',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: '$blackOpacity1',
  },

  '[data-radix-popper-content-wrapper]': {
    zIndex: '$tooltip!important',
  },
});
