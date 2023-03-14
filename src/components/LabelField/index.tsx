import React, { FC } from 'react';
import { FiInfo } from 'react-icons/fi';

import { Tooltip } from '~/components/Tooltip';

import { Icon, Required, Root } from './style';
import { Props } from './type';

export const LabelField: FC<Props> = ({
  children,
  className,
  elementId,
  required,
  requiredDescription = '(opcional)',
  size,
  tooltipDescription,
  tooltipIcon = <FiInfo />,
}) => (
  <Root className={className} htmlFor={elementId} size={size}>
    {children}
    {!required && <Required>{requiredDescription}</Required>}
    {tooltipIcon && tooltipDescription && (
      <Icon>
        <Tooltip description={tooltipDescription}>{tooltipIcon}</Tooltip>
      </Icon>
    )}
  </Root>
);
