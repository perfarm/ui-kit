import { styled } from '~/config/theme';

export const Root = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
});

export const Image = styled('img', {
  objectFit: 'contain',

  variants: {
    size: {
      medium: {
        height: '70px',
        width: '70px',
      },
      small: {
        height: '50px',
        width: '50px',
      },
    },
  },
});

export const ButtonsWrapper = styled('div', {
  columnGap: '$2',
  display: 'flex',
  marginTop: '$3',
});

export const Input = styled('input', {
  display: 'none',
});
