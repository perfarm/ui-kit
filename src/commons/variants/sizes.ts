import { css } from '~/config/theme';

export const variantFontSize = css({
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

export const variantPadding = css({
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
