export type ButtonColor = 'primary' | 'secondary' | 'white' | 'black';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface Props {
  color: ButtonColor;
  disabled?: boolean;
  id?: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: ButtonSize;
}
