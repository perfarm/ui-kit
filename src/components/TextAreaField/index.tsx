import React, { FC } from 'react';

import { InputRoot } from '~/components/InputRoot';

import { TextArea } from './style';
import { Props } from './types';

export const TextAreaField: FC<Props> = (props) => {
  const id = `textarea-${props.name}`;

  return (
    <InputRoot {...props} elementId={id}>
      <TextArea
        disabled={props.disabled}
        id={id}
        maxLength={props.maxLength}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.isRequired}
        rows={props.rows}
        size={props.size}
        value={props.value}
      />
    </InputRoot>
  );
};
