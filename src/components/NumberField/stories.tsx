import React, { useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NumberField } from './index';
import { Props } from './type';

export default {
  argTypes: {
    icon: { control: { type: 'text' } },
    size: { defaultValue: 'medium' },
    value: { control: { type: 'number' } },
  },
  component: NumberField,
  title: 'Components/NumberField',
} as ComponentMeta<typeof NumberField>;

const defaultArgs: Props = {
  disabled: false,
  errorText: 'Text example of field error',
  hasError: false,
  isRequired: false,
  label: 'Label',
  maxLength: 2,
  name: '',
  onChange: () => {},
  placeholder: 'Insert only numbers here',
  value: 123,
};

const Template: ComponentStory<typeof NumberField> = (args) => {
  const [value, setValue] = useState<number | string>(12345);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <NumberField
      {...args}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};

export const Label = Template.bind({});

Label.args = {
  ...defaultArgs,
};

export const Error = Template.bind({});

Error.args = {
  ...defaultArgs,
  hasError: true,
};

export const Icon = Template.bind({});

Icon.args = {
  ...defaultArgs,
  icon: 'Field',
};

export const Placeholder = Template.bind({});

Placeholder.args = {
  ...defaultArgs,
  value: '',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...defaultArgs,
  disabled: true,
};

export const TooltipInfo = Template.bind({});

TooltipInfo.args = {
  ...defaultArgs,
  infoText: faker.lorem.paragraph(2),
};

export const Required = Template.bind({});

Required.args = {
  ...defaultArgs,
  isRequired: true,
};
