import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  component: Button,
  title: 'Components/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: 'primary',
  disabled: false,
  label: 'Button',
  size: 'medium',
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: 'secondary',
  disabled: false,
  label: 'Button',
  size: 'medium',
};

export const White = Template.bind({});

White.args = {
  color: 'white',
  disabled: false,
  label: 'Button',
  size: 'medium',
};

export const Black = Template.bind({});

Black.args = {
  color: 'black',
  disabled: false,
  label: 'Button',
  size: 'medium',
};

export const Small = Template.bind({});

Small.args = {
  color: 'primary',
  disabled: false,
  label: 'Button',
  size: 'small',
};

export const Medium = Template.bind({});

Medium.args = {
  color: 'primary',
  disabled: false,
  label: 'Button',
  size: 'medium',
};

export const Large = Template.bind({});

Large.args = {
  color: 'primary',
  disabled: false,
  label: 'Button',
  size: 'large',
};

export const Disabled = Template.bind({});

Disabled.args = {
  color: 'primary',
  disabled: true,
  label: 'Button',
  size: 'medium',
};
