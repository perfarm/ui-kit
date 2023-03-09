import { PropsWithChildren } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface OwnProps {
  children?: JSX.Element;
  className?: string;
  disabled?: boolean;
  elementId?: string;
  errorText?: string;
  hasError?: boolean;
  icon?: string | JSX.Element;
  label?: string;
  name: string;
  size?: InputSize;
}

export type Props = PropsWithChildren<OwnProps>;
