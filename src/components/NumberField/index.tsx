import React, { FC } from 'react';

import { TextField } from '~/components/TextField';

import { Props } from './type';

export const NumberField: FC<Props> = (props) => <TextField {...props} type="number" />;
