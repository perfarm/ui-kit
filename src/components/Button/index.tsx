import React, { FC } from 'react';
import { ButtonStyled } from './style';
import { Props } from './types';

export const Button: FC<Props> = ({ label, color, size, onClick, disabled, dataTestId }) => {
  return (
    <ButtonStyled
      color={color}
      size={size}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {label}
    </ButtonStyled>
  );
};
