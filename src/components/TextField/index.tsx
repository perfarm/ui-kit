import React, { FC } from 'react';

import { Content, Error, Icon, Input, InputContent, Label, Root } from './style';
import { Props } from './type';

export const TextField: FC<Props> = ({
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
  type,
  value,
}) => (
  <Root className={className} size={size}>
    <Label htmlFor={`textfield-${name}`}>{label}</Label>
    <Content>
      <InputContent disabled={disabled} hasError={hasError}>
        <Input
          disabled={disabled}
          id={`textfield-${name}`}
          maxLength={maxLength}
          name={name}
          onChange={disabled ? null : onChange}
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
      {hasError && errorText?.length > 0 && (
        <Error htmlFor={`textfield-${name}`} id={`textfield-error-${name}`}>
          {errorText}
        </Error>
      )}
    </Content>
  </Root>
);
