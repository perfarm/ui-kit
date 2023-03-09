import React, { FC } from 'react';

import { Item, ItemIndicator, ItemLabel, ItemWrapper, Root } from './style';
import { Props } from './types';

export const RadioGroup: FC<Props> = ({ ariaLabel, disabled, items, onChange, value }) => {
  return (
    <Root aria-label={ariaLabel} disabled={disabled} onValueChange={onChange} value={value}>
      {items.map((item) => (
        <ItemWrapper key={item.value}>
          <Item id={item.value} value={item.value}>
            <ItemIndicator />
          </Item>
          <ItemLabel htmlFor={item.value}>{item.label}</ItemLabel>
        </ItemWrapper>
      ))}
    </Root>
  );
};
