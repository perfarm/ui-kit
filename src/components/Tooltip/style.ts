import { Arrow, Content, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import { keyframes } from '@stitches/react';

import { styled } from '~/config/theme';

export const TooltipProvider = styled(Provider, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});

export const TooltipRoot = styled(Root, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});

export const TooltipTrigger = styled(Trigger, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});
export const TooltipTriggerElement = styled('div', {});

export const TooltipPortal = styled(Portal, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

const revealByOpacity = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const TooltipArrow = styled(Arrow, {
  fill: '$white',
});

export const TooltipContentWrap = styled('div', {
  fontSize: '$3',
  maxWidth: '400px',
  overflow: 'auto',
  padding: '$3 $4',

  defaultVariants: { maxHeight: 'medium' },

  variants: {
    maxHeight: {
      large: { maxHeight: '300px' },
      medium: { maxHeight: '150px' },
      small: { maxHeight: '75px' },
    },
  },
});

export const TooltipContent = styled(Content, {
  animationDuration: '250ms',
  animationName: `${revealByOpacity}`,
  animationTimingFunction: 'cubicbezier(0.16, 1, 0.3, 1)',
  borderRadius: '$1',
  borderStyle: 'solid',
  borderWidth: '2px',
  boxShadow: '$1',
  lineHeight: 1,
  maxWidth: '90vw',
  userSelect: 'none',
  willchange: 'transform, opacity',

  defaultVariants: { color: 'black' },
  variants: {
    color: {
      black: {
        backgroundColor: '$gray700',
        borderColor: '$gray900',
        color: '$gray50',

        [`& ${TooltipArrow}`]: {
          fill: '$gray900',
        },
      },
      primary: {
        backgroundColor: '$primary50',
        borderColor: '$primary400',
        color: '$primary900',

        [`& ${TooltipArrow}`]: {
          fill: '$primary400',
        },
      },
      white: {
        backgroundColor: '$gray50',
        borderColor: '$gray400',
        color: '$gray900',

        [`& ${TooltipArrow}`]: {
          fill: '$gray400',
        },
      },

      secondary: {
        backgroundColor: '$secondary50',
        borderColor: '$secondary400',
        color: '$secondary900',

        [`& ${TooltipArrow}`]: {
          fill: '$secondary400',
        },
      },
    },
  },
});
