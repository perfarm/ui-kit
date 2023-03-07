import React, { FC } from 'react';

import { Item, ItemIndicator, ItemLabel, ItemWrapper, Root } from './style';
import { Props } from './types';

export const RadioGroup: FC<Props> = ({ ariaLabel, disabled, items, onValueChange, value }) => {
  return (
    <Root aria-label={ariaLabel} disabled={disabled} onValueChange={onValueChange} value={value}>
      {items.map((item) => (
        <ItemWrapper key={item.id}>
          <Item id={item.id} value={item.id}>
            <ItemIndicator />
          </Item>
          <ItemLabel htmlFor={item.id}>{item.label}</ItemLabel>
        </ItemWrapper>
      ))}
    </Root>
  );
};
