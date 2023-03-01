import { globalCss } from './theme';

export const globalStyles = globalCss({
  '*, &::after, &::before': {
    boxSizing: 'border-box',
  },

  body: {
    wordWrap: 'break-word',
    wordBreak: 'normal',
    minWidth: '360px',
    maxWidth: '100%',
    minHeight: '100%',
    margin: 0,
  },

  'button, div,a': {
    outline: 'none',
  },

  /* ------------------ */
  /* Select Shadows */
  '::selection': {
    backgroundColor: '$blackOpacity3',
  },
  '::-moz-selection': {
    backgroundColor: '$blackOpacity5',
  },

  /* ------------------ */
  /* Scrollbar */
  '::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: '$blackOpacity1',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$primary400',
  },
  '::-webkit-scrollbar-thumb:window-inactive': {
    backgroundColor: '$secondary400',
  },
});
