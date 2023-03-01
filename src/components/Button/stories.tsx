import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
  color: 'primary',
  size: 'medium',
  disabled: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Button',
  color: 'secondary',
  size: 'medium',
  disabled: false,
};

export const White = Template.bind({});

White.args = {
  label: 'Button',
  color: 'white',
  size: 'medium',
  disabled: false,
};

export const Black = Template.bind({});

Black.args = {
  label: 'Button',
  color: 'black',
  size: 'medium',
  disabled: false,
};

export const Small = Template.bind({});

Small.args = {
  label: 'Button',
  color: 'primary',
  size: 'small',
  disabled: false,
};

export const Medium = Template.bind({});

Medium.args = {
  label: 'Button',
  color: 'primary',
  size: 'medium',
  disabled: false,
};

export const Large = Template.bind({});

Large.args = {
  label: 'Button',
  color: 'primary',
  size: 'large',
  disabled: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Button',
  color: 'primary',
  size: 'medium',
  disabled: true,
  onClick: () => {
    alert('ss');
  },
};
