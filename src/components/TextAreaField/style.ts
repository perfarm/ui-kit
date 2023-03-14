import { variantFontSize } from '~/commons/variants/sizes';
import { styled } from '~/config/theme';

export const TextArea = styled('textarea', variantFontSize, {
  backgroundColor: 'transparent',
  border: 'none',
  flex: 1,
  outline: 'none',
  resize: 'none',
});
