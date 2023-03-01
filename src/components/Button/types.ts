export type ButtonColor = 'primary' | 'secondary' | 'white' | 'black';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface Props {
  label: string;
  color: ButtonColor;
  size: ButtonSize;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  dataTestId?: string;
}
