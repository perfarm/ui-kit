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
  size,
}) => (
  <Root className={className} size={size}>
    {label ? <Label htmlFor={elementId}>{label}</Label> : null}
    <Content>
      <InputContent disabled={disabled} hasError={hasError}>
        {children}
        {icon ? (
          <Icon htmlFor={elementId} size={size}>
            {icon}
          </Icon>
        ) : null}
      </InputContent>

      {hasError && !!errorText?.length && (
        <Error htmlFor={elementId} id={`${elementId}-error`}>
          {errorText}
        </Error>
      )}
    </Content>
  </Root>
);
