import { ChangeEventHandler } from 'react';

import { OwnProps as InputRootProps } from '~/components/InputRoot/type';

export interface OwnProps {
  maxLength?: number;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value?: string;
}

export type Props = InputRootProps & OwnProps;
