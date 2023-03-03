import { ChangeEventHandler } from 'react';

export type InputSizes = 'small' | 'medium' | 'large';
export type InputTypes = 'email' | 'password' | 'search' | 'tel' | 'text' | 'number' | 'url';
export interface Props {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  icon?: string | JSX.Element;
  label?: string;
  maxLength?: number;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  size?: InputSizes;
  type?: InputTypes;
  value: string | number;
}
