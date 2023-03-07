import React, { FC } from 'react';

import { AreaContent, Content, Error, Icon, Label, Root, TextArea } from './style';
import { Props } from './types';

export const TextAreaField: FC<Props> = ({
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
  rows,
  size,
  value,
}) => (
  <Root className={className} size={size}>
    <Label htmlFor={`textarea-${name}`}>{label}</Label>
    <Content>
      <AreaContent disabled={disabled} hasError={hasError}>
        <TextArea
          disabled={disabled}
          id={`textarea-${name}`}
          maxLength={maxLength}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          size={size}
          value={value}
        />
        {icon ? (
          <Icon htmlFor={`textarea-${name}`} size={size}>
            {icon}
          </Icon>
        ) : null}
      </AreaContent>
      {hasError && errorText?.length > 0 && (
        <Error htmlFor={`textarea-${name}`} id={`textarea-error-${name}`}>
          {errorText}
        </Error>
      )}
    </Content>
  </Root>
);
