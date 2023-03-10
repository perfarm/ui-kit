import React, { FC } from 'react';

import { Button as ButtonStyled } from './style';
import { Props } from './types';

export const Button: FC<Props> = ({ color, disabled, id, label, onClick, size }) => {
  return (
    <ButtonStyled color={color} disabled={disabled} id={id} onClick={onClick} size={size}>
      {label}
    </ButtonStyled>
  );
};
