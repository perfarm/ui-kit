import React, { FC } from 'react';

import { InputRoot } from '~/components/InputRoot';

import { Input } from './style';
import { Props } from './type';

export const TextField: FC<Props> = (props) => (
  <InputRoot {...props} elementId="textfield">
    <Input
      disabled={props.disabled}
      id={`textfield-${props.name}`}
      maxLength={props.maxLength}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
      size={props.size}
      type={props.type}
      value={props.value}
    />
  </InputRoot>
);
