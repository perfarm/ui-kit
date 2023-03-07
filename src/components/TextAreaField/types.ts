import { ChangeEventHandler } from 'react';

export type InputSizes = 'small' | 'medium' | 'large';

export interface Props {
  className?: string;
  disabled?: boolean;
  errorText?: string;
  hasError?: boolean;
  icon?: string | JSX.Element;
  label?: string;
  maxLength?: number;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  size?: InputSizes;
  value?: string | number;
}
