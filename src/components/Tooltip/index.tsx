import React, { FC, useState } from 'react';

import {
  TooltipArrow,
  TooltipContent,
  TooltipContentWrap,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipTriggerElement,
} from './style';
import { Props } from './type';

export const Tooltip: FC<Props> = ({ color, delay = 250, description, isOpen = false, maxHeight, side, trigger }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={delay} onOpenChange={setOpen} open={open}>
        <TooltipTrigger
          asChild
          onClick={() => {
            setOpen(!open);
          }}
        >
          <TooltipTriggerElement>{trigger}</TooltipTriggerElement>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent color={color} side={side} sideOffset={5}>
            <TooltipContentWrap maxHeight={maxHeight}>{description}</TooltipContentWrap>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};
