import React, { FC } from 'react';

import { LabelField } from '../LabelField';
import { Content, Error, Icon, InputContent, Root } from './style';
import { Props } from './type';

export const InputRoot: FC<Props> = ({
  children,
  className,
  disabled,
  elementId = 'input',
  errorText,
  hasError = false,
  icon,
  infoText,
  isRequired = false,
  label,
  size,
}) => (
  <Root className={className} size={size}>
    {label ? (
      <LabelField elementId={elementId} iconText={infoText} isOptional={!isRequired}>
        {label}
      </LabelField>
    ) : null}
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
