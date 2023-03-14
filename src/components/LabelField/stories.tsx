import React from 'react';

import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LabelField } from '.';
import { Props } from './type';

export default {
  argTypes: {
    icon: { control: { disable: true } },
    isOptional: { defaultValue: false },
    size: { defaultValue: 'medium' },
    tooltipDescription: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
  component: LabelField,
  parameters: { layout: 'centered' },
  title: 'Components/LabelField',
} as ComponentMeta<typeof LabelField>;

const defaultArgs: Props = {
  children: faker.lorem.words(2),
  elementId: 'label-storybook',
};

const Template: ComponentStory<typeof LabelField> = (args) => <LabelField {...args} />;

export const Default = Template.bind({});

Default.args = { ...defaultArgs };

export const TooltipIcon = Template.bind({});

TooltipIcon.args = { ...defaultArgs, tooltipDescription: faker.lorem.paragraph(2) };

export const Required = Template.bind({});

Required.args = { ...defaultArgs, required: true };
