import { keyframes } from '@stitches/react';
import { css, styled } from '~/config/theme';

const variantFontSize = css({
  variants: {
    size: {
      small: {
        fontSize: '$2',
      },
      medium: {
        fontSize: '$4',
      },
      large: {
        fontSize: '$6',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const variantPadding = css({
  variants: {
    size: {
      small: {
        padding: '$2',
      },
      medium: {
        padding: '$3',
      },
      large: {
        padding: '$4',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const Input = styled('input', variantFontSize, variantPadding, {
  border: 'none',
  flex: 1,
  outline: 'none',
  backgroundColor: 'transparent',
});
export const Label = styled('label', {
  marginBottom: '$1',
});
export const Content = styled('div', {
  position: 'relative',
});
export const InputContent = styled('div', {
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$white',
  borderRadius: '$1',
  zIndex: 9,
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid $primary200',
  outline: '2px solid transparent',
  transition: '$easeInOut02',

  '&:hover, &:focus-within': {
    outlineColor: '$primary200',
  },

  variants: {
    error: {
      true: {
        border: '1px solid $error200',

        '&:hover,&:focus-within': {
          outlineColor: '$error200',
        },
      },
    },
    disabled: {
      true: {
        border: '1px solid $gray300',
        cursor: 'not-allowed',
        backgroundColor: '$gray200',
        opacity: '0.9',
        '&:hover,&:focus-within': {
          outlineColor: 'transparent',
        },
      },
    },
  },
});
export const Icon = styled('label', variantPadding, {
  position: 'relative',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '$3',
  alignItems: 'center',
  color: '$gray600',

  '&:before': {
    content: '',
    position: 'absolute',
    left: -1,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '$gray600',
    width: 1,
    height: '70%',
  },
});

const moveDown = keyframes({
  '0%': { top: '0', visibility: 'hidden', opacity: 0 },
  '100%': { top: '100%', visibility: 'visible', opacity: 1 },
});

export const Error = styled('label', {
  position: 'absolute',
  top: '0',
  opacity: 0,
  marginTop: 0,
  visibility: 'hidden',
  left: 0,
  zIndex: 0,
  width: '100%',
  color: '$error800',
  backgroundColor: '$error50',
  padding: '$3',
  animation: `${moveDown} 200ms`,
  animationFillMode: 'forwards',
});

export const Root = styled('div', variantFontSize, {
  position: 'relative',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});
