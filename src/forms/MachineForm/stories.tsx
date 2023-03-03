import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MachineForm } from '.';

export default {
  component: MachineForm,
  title: 'Forms/MachineForm',
} as ComponentMeta<typeof MachineForm>;

const Template: ComponentStory<typeof MachineForm> = (args) => <MachineForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'MachineForm',
};
