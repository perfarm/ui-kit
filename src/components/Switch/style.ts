import * as Switch from '@radix-ui/react-switch';

import { styled } from '~/config/theme';

export const Root = styled('div', {
  alignItems: 'center',
  display: 'flex',
  height: '24px',
});

export const Label = styled('label', {
  color: '$gray600',
  cursor: 'pointer',
  fontSize: '$2',
  userSelect: 'none',
});

export const SwitchRoot = styled(Switch.Root, {
  backgroundColor: '$white',
  borderColor: '$gray400',
  borderRadius: '9999px',
  borderStyle: 'solid',
  borderWidth: '1px',
  cursor: 'pointer',
  height: '100%',
  marginRight: '$3',
  position: 'relative',
  WebkitTapHighlightColor: 'transparent',
  width: '42px',

  '&::before': {
    borderColor: '$primary400',
    borderRadius: '9999px',
    borderStyle: 'solid',
    borderWidth: '2px',
    content: '',
    display: 'none',
    height: '100%',
    left: '-2px',
    position: 'absolute',
    top: '-2px',
    width: '100%',
  },

  '&:focus::before': {
    display: 'block',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.4',
  },
});

export const SwitchThumb = styled(Switch.Thumb, {
  backgroundColor: 'white',
  borderColor: '$gray400',
  borderRadius: '9999px',
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'block',
  height: '16px',
  transform: 'translateX(-2px)',
  transition: 'transform 100ms',
  width: '16px',
  willChange: 'transform',

  '&[data-state="checked"]': {
    backgroundColor: '$primary400',
    borderColor: '$primary400',
    transform: 'translateX(14px)',
  },
});
