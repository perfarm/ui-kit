import React, { FC } from 'react';

import { Button as ButtonStyled } from './style';
import { Props } from './types';

export const Button: FC<Props> = ({ label, color, size, onClick, disabled, id }) => {
  return (
    <ButtonStyled color={color} size={size} onClick={onClick} disabled={disabled} id={id}>
      {label}
    </ButtonStyled>
  );
};
