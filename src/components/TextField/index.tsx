import React, { FC } from 'react';

import { Content, Error, Icon, Input, InputContent, Label, Root } from './style';
import { Props } from './type';

export const TextField: FC<Props> = ({
  value,
  name,
  onChange,
  icon,
  error = false,
  errorText,
  label,
  size,
  maxLength,
  type,
  required,
  disabled,
  placeholder,
  className,
}) => {
  return (
    <Root className={className} size={size}>
      <Label htmlFor={`textfield-${name}`}>{label}</Label>
      <Content>
        <InputContent disabled={disabled} error={error}>
          <Input
            disabled={disabled}
            id={`textfield-${name}`}
            maxLength={maxLength}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            size={size}
            type={type}
            value={value}
          />
          {icon ? (
            <Icon htmlFor={`textfield-${name}`} size={size}>
              {icon}
            </Icon>
          ) : null}
        </InputContent>
        {error && errorText?.length > 0 && (
          <Error htmlFor={`textfield-${name}`} id={`textfield-error-${name}`}>
            {errorText}
          </Error>
        )}
      </Content>
    </Root>
  );
};
