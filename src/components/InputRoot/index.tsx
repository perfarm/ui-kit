import React, { FC } from 'react';

import { Content, Error, Icon, InputContent, Label, Root } from './style';
import { Props } from './type';

export const InputRoot: FC<Props> = ({
  children,
  className,
  disabled,
  elementId = 'input',
  errorText,
  hasError,
  icon,
  label,
  name,
  size,
}) => (
  <Root className={className} size={size}>
    {label ? <Label htmlFor={`${elementId}-${name}`}>{label}</Label> : null}
    <Content>
      <InputContent disabled={disabled} hasError={hasError}>
        {children}
        {icon ? (
          <Icon htmlFor={`${elementId}-${name}`} size={size}>
            {icon}
          </Icon>
        ) : null}
      </InputContent>

      {hasError && !!errorText?.length && (
        <Error htmlFor={`${elementId}-${name}`} id={`${elementId}-error-${name}`}>
          {errorText}
        </Error>
      )}
    </Content>
  </Root>
);
