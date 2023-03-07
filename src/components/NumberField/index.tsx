import React, { FC } from 'react';

import { TextField } from '~/components/TextField';
import { Props } from '~/components/TextField/type';

export const NumberField: FC<Props> = ({
  className,
  disabled,
  errorText,
  hasError,
  icon,
  label,
  maxLength,
  name,
  onChange,
  placeholder,
  required,
  size,
  value,
}) => (
  <TextField
    className={className}
    disabled={disabled}
    errorText={errorText}
    hasError={hasError}
    icon={icon}
    label={label}
    maxLength={maxLength}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    size={size}
    type="number"
    value={value}
  />
);
