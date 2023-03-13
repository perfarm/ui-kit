import React, { FC } from 'react';
import { FiInfo } from 'react-icons/fi';

import { Tooltip } from '~/components/Tooltip';

import { Icon, Optional, Root } from './style';
import { Props } from './type';

export const LabelField: FC<Props> = ({
  children,
  className,
  elementId,
  icon = <FiInfo />,
  iconText,
  isOptional,
  optionalText = 'opcional',
  size,
}) => (
  <Root className={className} htmlFor={elementId} size={size}>
    {children}
    {isOptional ? <Optional>{optionalText}</Optional> : null}
    {icon && iconText ? (
      <Icon>
        <Tooltip description={iconText}>{icon}</Tooltip>
      </Icon>
    ) : null}
  </Root>
);
