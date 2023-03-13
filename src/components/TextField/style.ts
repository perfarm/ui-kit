import { variantFontSize, variantPadding } from '~/commons/variants/sizes';
import { styled } from '~/config/theme';

export const Input = styled('input', variantFontSize, variantPadding, {
  backgroundColor: 'transparent',
  border: 'none',
  flex: 1,
  outline: 'none',
});
