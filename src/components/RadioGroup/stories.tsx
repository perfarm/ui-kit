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
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ],
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  items: [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ],
  value: '3',
};
