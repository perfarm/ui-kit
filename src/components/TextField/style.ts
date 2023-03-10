import { variantFontSize, variantPadding } from '~/components/InputRoot/style';
import { styled } from '~/config/theme';

export const Input = styled('input', variantFontSize, variantPadding, {
  backgroundColor: 'transparent',
  border: 'none',
  flex: 1,
  outline: 'none',
});
