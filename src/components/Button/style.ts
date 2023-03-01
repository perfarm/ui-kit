import { styled } from '~/config/theme';

export const ButtonStyled = styled('button', {
  borderWidth: '1px',
  borderRadius: '$1',
  fontSize: '$2',

  variants: {
    color: {
      primary: {
        borderColor: 'transparent',
        backgroundColor: '$primary500',
        color: '$white',
      },
      secondary: {
        borderColor: 'transparent',
        backgroundColor: '$secondary500',
        color: '$black',
      },
      white: {
        borderColor: '$black',
        backgroundColor: '$white',
        color: '$black',
      },
      black: {
        borderColor: '$secondary500',
        backgroundColor: '$black',
        color: '$secondary500',
      },
    },
    size: {
      small: {
        paddingY: '$1',
        paddingX: '$3',
      },
      medium: {
        paddingY: '$2',
        paddingX: '$3',
      },
      large: {
        paddingY: '$3',
        paddingX: '$4',
      },
    },
    disabled: {
      true: {
        opacity: '0.4',
        cursor: 'not-allowed',
      },
      false: {
        opacity: '0.8',
        cursor: 'pointer',
        '&:hover': {
          opacity: '0.9',
        },
        '&:active': {
          opacity: '1.0',
        },
      },
    },
  },

  defaultVariants: {
    disabled: false,
  },
});
