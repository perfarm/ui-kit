import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RadioGroup } from '.';

export default {
  component: RadioGroup,
  title: 'Components/RadioGroup',
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Enabled = Template.bind({});

Enabled.args = {
  items: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  items: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  value: '3',
};
