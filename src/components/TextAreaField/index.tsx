import React, { FC } from 'react';

import { InputRoot } from '~/components/InputRoot';

import { TextArea } from './style';
import { Props } from './types';

export const TextAreaField: FC<Props> = (props) => (
  <InputRoot {...props} elementId="textarea">
    <TextArea
      disabled={props.disabled}
      id={`textarea-${props.name}`}
      maxLength={props.maxLength}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
      rows={props.rows}
      size={props.size}
      value={props.value}
    />
  </InputRoot>
);
