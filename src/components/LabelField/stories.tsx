import React from 'react';

import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LabelField } from '.';
import { Props } from './type';

export default {
  argTypes: {
    icon: { control: { disable: true } },
    iconText: { control: { type: 'text' } },
    isOptional: { defaultValue: false },
    size: { defaultValue: 'medium' },
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

TooltipIcon.args = { ...defaultArgs, iconText: faker.lorem.paragraph(2) };

export const Optional = Template.bind({});

Optional.args = { ...defaultArgs, isOptional: true };
