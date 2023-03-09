import { ChangeEventHandler } from 'react';

import { OwnProps as InputRootProps } from '~/components/InputRoot/type';

export interface OwnProps {
  maxLength?: number;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value?: string | number;
}

export type Props = InputRootProps & OwnProps;
