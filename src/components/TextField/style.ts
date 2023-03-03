import { keyframes } from '@stitches/react';

import { css, styled } from '~/config/theme';

const variantFontSize = css({
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      large: {
        fontSize: '$6',
      },
      medium: {
        fontSize: '$4',
      },
      small: {
        fontSize: '$2',
      },
    },
  },
});

const variantPadding = css({
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      large: {
        padding: '$4',
      },
      medium: {
        padding: '$3',
      },
      small: {
        padding: '$2',
      },
    },
  },
});

export const Input = styled('input', variantFontSize, variantPadding, {
  backgroundColor: 'transparent',
  border: 'none',
  flex: 1,
  outline: 'none',
});
export const Label = styled('label', {
  marginBottom: '$1',
});
export const Content = styled('div', {
  position: 'relative',
});
export const InputContent = styled('div', {
  alignItems: 'center',
  backgroundColor: '$white',
  border: '1px solid $primary200',
  borderRadius: '$1',
  display: 'flex',
  justifyContent: 'space-between',
  outline: '2px solid transparent',
  overflow: 'hidden',
  position: 'relative',
  transition: '$easeInOut02',
  zIndex: 9,

  '&:hover, &:focus-within': {
    outlineColor: '$primary200',
  },

  variants: {
    disabled: {
      true: {
        backgroundColor: '$gray200',
        border: '1px solid $gray300',
        cursor: 'not-allowed',
        opacity: '0.9',

        '&:hover,&:focus-within': {
          outlineColor: 'transparent',
        },
      },
    },
    error: {
      true: {
        border: '1px solid $error200',

        '&:hover,&:focus-within': {
          outlineColor: '$error200',
        },
      },
    },
  },
});
export const Icon = styled('label', variantPadding, {
  alignItems: 'center',
  color: '$gray600',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  padding: '$3',
  position: 'relative',

  '&:before': {
    backgroundColor: '$gray600',
    content: '',
    height: '70%',
    left: -1,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 1,
  },
});

const moveDown = keyframes({
  '0%': { opacity: 0, top: '0', visibility: 'hidden' },
  '100%': { opacity: 1, top: '100%', visibility: 'visible' },
});

export const Error = styled('label', {
  animation: `${moveDown} 200ms`,
  animationFillMode: 'forwards',
  backgroundColor: '$error50',
  color: '$error800',
  left: 0,
  marginTop: 0,
  opacity: 0,
  padding: '$3',
  position: 'absolute',
  top: '0',
  visibility: 'hidden',
  width: '100%',
  zIndex: 0,
});

export const Root = styled('div', variantFontSize, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});
