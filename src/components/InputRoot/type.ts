import { PropsWithChildren } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface OwnProps {
  className?: string;
  disabled?: boolean;
  elementId?: string;
  errorText?: string;
  hasError?: boolean;
  icon?: string | JSX.Element;
  label?: string;
  size?: InputSize;
}

export type Props = PropsWithChildren<OwnProps>;
