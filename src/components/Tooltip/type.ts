import { PropsWithChildren } from 'react';

type TooltipColor = 'primary' | 'secondary' | 'white' | 'black';
type TooltipSide = 'top' | 'right' | 'bottom' | 'left';
type TooltipMaxHeight = 'small' | 'medium' | 'large';

interface TooltipProps {
  color?: TooltipColor;
  delay?: number;
  description: string | JSX.Element;
  isOpen?: boolean;
  maxHeight?: TooltipMaxHeight;
  side?: TooltipSide;
}

export type Props = PropsWithChildren<TooltipProps>;
