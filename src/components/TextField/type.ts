import React from 'react';

export type InputSizes = 'small' | 'medium' | 'large';
export type InputTypes = 'email' | 'password' | 'search' | 'tel' | 'text' | 'number' | 'url';
export interface Props {
  value: string | number;
  name: string;
  size?: InputSizes;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string | JSX.Element;
  label?: string;
  error?: boolean;
  errorText?: string;
  type?: InputTypes;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}
