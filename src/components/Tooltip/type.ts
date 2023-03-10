export type TooltipColor = 'primary' | 'secondary' | 'white' | 'black';
export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';
export type TooltipMaxHeight = 'small' | 'medium' | 'large';

export interface Props {
  color?: TooltipColor;
  delay?: number;
  description: string | JSX.Element;
  isOpen?: boolean;
  maxHeight?: TooltipMaxHeight;
  side?: TooltipSide;
  trigger: string | JSX.Element;
}
