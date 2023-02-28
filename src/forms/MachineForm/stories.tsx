import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { globalStyles } from '~/config/globalStyles';
import { MachineForm } from './index';

export default {
  title: 'Example/MachineForm',
  component: MachineForm,
} as ComponentMeta<typeof MachineForm>;

const Template: ComponentStory<typeof MachineForm> = (args) => {
  globalStyles();

  return <MachineForm {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'MachineForm',
};
