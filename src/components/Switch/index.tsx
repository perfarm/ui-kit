import React, { FC } from 'react';

import { SwitchRoot, SwitchThumb, Root, Label } from './style';
import { Props } from './types';

export const Switch: FC<Props> = ({ checked, disabled, id, label, onChange }) => {
  return (
    <Root>
      <SwitchRoot checked={checked} disabled={disabled} id={id} onCheckedChange={onChange}>
        <SwitchThumb />
      </SwitchRoot>
      <Label htmlFor={id}>{label}</Label>
    </Root>
  );
};
