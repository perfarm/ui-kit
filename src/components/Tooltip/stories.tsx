import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip } from '.';
import { Props } from './type';

export default {
  argTypes: {
    color: { defaultValue: 'black' },
    description: { control: { type: 'text' } },
    maxHeight: { defaultValue: 'medium' },
    trigger: { control: { type: 'text' } },
  },
  component: Tooltip,
  parameters: { layout: 'centered' },
  title: 'Components/Tooltip',
} as ComponentMeta<typeof Tooltip>;

const defaultArgs: Props = {
  description: faker.lorem.words(4),
  trigger: 'Example Trigger',
};

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return <Tooltip {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  ...defaultArgs,
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  color: 'secondary',
};

export const White = Template.bind({});
White.args = {
  ...defaultArgs,
  color: 'white',
};

export const OverflowScroll = Template.bind({});
OverflowScroll.args = {
  ...defaultArgs,
  description: faker.lorem.paragraph(8),
  maxHeight: 'small',
};

export const Icon = Template.bind({});

Icon.args = {
  ...defaultArgs,
  description: faker.lorem.paragraph(8),
  trigger: <FaInfoCircle size="3rem" />,
};
Icon.argTypes = {
  trigger: { control: { disable: true } },
};
