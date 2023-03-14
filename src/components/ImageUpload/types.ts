import { ButtonSize } from '../Button/types';

export interface Props {
  defaultValue: string;
  name: string;
  onChange: (value: string) => void;
  size: Exclude<ButtonSize, 'large'>;
  value: string;
}
