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
        <InputContent error={error} disabled={disabled}>
          <Input
            placeholder={placeholder}
            size={size}
            id={`textfield-${name}`}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            required={required}
            disabled={disabled}
          />
          {icon ? (
            <Icon htmlFor={`textfield-${name}`} size={size}>
              {icon}
            </Icon>
          ) : null}
        </InputContent>
        {error && errorText?.length > 0 && (
          <Error id={`textfield-error-${name}`} htmlFor={`textfield-${name}`}>
            {errorText}
          </Error>
        )}
      </Content>
    </Root>
  );
};
