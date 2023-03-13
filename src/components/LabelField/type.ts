import { PropsWithChildren } from 'react';

import { CommonSize } from '~/commons/types';

export interface OwnProps {
  className?: string;
  elementId: string;
  icon?: JSX.Element;
  iconText?: string | JSX.Element;
  isOptional?: boolean;
  optionalText?: string;
  size?: CommonSize;
}

export type Props = PropsWithChildren<OwnProps>;
