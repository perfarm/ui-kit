import React, { FC } from 'react';

import { SwitchRoot, SwitchThumb, Root, Label } from './style';
import { Props } from './types';

export const Switch: FC<Props> = ({ checked, disabled, id, label, onCheckedChange }) => {
  return (
    <Root>
      <SwitchRoot checked={checked} disabled={disabled} id={id} onCheckedChange={onCheckedChange}>
        <SwitchThumb />
      </SwitchRoot>
      <Label htmlFor={id}>{label}</Label>
    </Root>
  );
};
