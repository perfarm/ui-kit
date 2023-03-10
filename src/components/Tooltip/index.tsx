import React, { FC, useCallback, useState } from 'react';

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

export const Tooltip: FC<Props> = ({ children, color, delay = 250, description, isOpen = false, maxHeight, side }) => {
  const [open, setOpen] = useState(isOpen);

  const onClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={delay} onOpenChange={setOpen} open={open}>
        <TooltipTrigger asChild onClick={onClick}>
          <TooltipTriggerElement>{children}</TooltipTriggerElement>
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
