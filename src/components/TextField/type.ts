import { ChangeEventHandler } from 'react';

import { OwnProps as InputRootProps } from '~/components/InputRoot/type';

export type InputType = 'email' | 'password' | 'search' | 'tel' | 'text' | 'number' | 'url';

export interface OwnProps {
  maxLength?: number;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  type?: InputType;
  value?: string | number;
}

export type Props = InputRootProps & OwnProps;
