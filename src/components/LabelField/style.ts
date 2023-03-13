import { variantFontSize } from '~/commons/variants/sizes';
import { styled } from '~/config/theme';

export const Root = styled('label', variantFontSize, {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '$1',

  defaultVariants: { size: 'medium' },
});

export const Icon = styled('span', {
  marginLeft: '$3',
});

export const Optional = styled('span', {
  color: '$gray400',
  marginLeft: '$3',
});
