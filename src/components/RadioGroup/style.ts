import {
  Indicator as RadixRadioGroupIndicator,
  Item as RadixRadioGroupItem,
  Root as RadixRadioGroupRoot,
} from '@radix-ui/react-radio-group';

import { styled } from '~/config/theme';

export const Root = styled(RadixRadioGroupRoot, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

export const ItemWrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
});

export const Item = styled(RadixRadioGroupItem, {
  backgroundColor: '$white',
  borderColor: '$gray500',
  borderRadius: '$round',
  borderStyle: 'solid',
  borderWidth: '1px',
  cursor: 'pointer',
  height: '24px',
  padding: '0px',
  position: 'relative',
  width: '24px',

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

export const ItemIndicator = styled(RadixRadioGroupIndicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',

  '&::after': {
    backgroundColor: '$primary400',
    borderRadius: '$round',
    content: '""',
    display: 'block',
    height: '16px',
    width: '16px',
  },
});

export const ItemLabel = styled('label', {
  color: '$gray800',
  cursor: 'pointer',
  fontSize: '$2',
  paddingLeft: '$3',
  userSelect: 'none',
});
