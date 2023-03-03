import { styled } from '~/config/theme';

export const Button = styled('button', {
  borderRadius: '$1',
  borderWidth: '1px',
  cursor: 'pointer',
  fontSize: '$2',
  opacity: '0.8',

  '&:hover': {
    opacity: '0.9',
  },

  '&:active': {
    opacity: '1.0',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.4',
  },

  variants: {
    color: {
      black: {
        backgroundColor: '$black',
        borderColor: '$secondary500',
        color: '$secondary500',
      },
      primary: {
        backgroundColor: '$primary500',
        borderColor: 'transparent',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$secondary500',
        borderColor: 'transparent',
        color: '$black',
      },
      white: {
        backgroundColor: '$white',
        borderColor: '$black',
        color: '$black',
      },
    },
    size: {
      large: {
        paddingX: '$4',
        paddingY: '$3',
      },
      medium: {
        paddingX: '$3',
        paddingY: '$2',
      },
      small: {
        paddingX: '$3',
        paddingY: '$1',
      },
    },
  },
});
