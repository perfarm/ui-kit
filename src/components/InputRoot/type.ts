import { PropsWithChildren } from 'react';

import { CommonSize } from '~/commons/types';

export interface OwnProps {
  className?: string;
  disabled?: boolean;
  elementId?: string;
  errorText?: string;
  hasError?: boolean;
  icon?: string | JSX.Element;
  infoText?: string;
  isRequired?: boolean;
  label?: string;
  size?: CommonSize;
}

export type Props = PropsWithChildren<OwnProps>;
