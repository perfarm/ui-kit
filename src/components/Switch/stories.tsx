import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '.';

export default {
  component: Switch,
  title: 'Components/Switch',
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Enabled = Template.bind({});

Enabled.args = {
  id: 'switch-enabled',
  label: 'Switch',
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  id: 'switch-disabled',
  label: 'Switch',
};
