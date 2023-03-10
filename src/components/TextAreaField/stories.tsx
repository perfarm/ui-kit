import React, { useEffect, useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextAreaField } from './index';
import { Props } from './types';

export default {
  argTypes: {
    icon: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
  component: TextAreaField,
  title: 'Components/TextAreaField',
} as ComponentMeta<typeof TextAreaField>;

const defaultArgs: Props = {
  disabled: false,
  errorText: 'Text example of field error',
  hasError: false,
  label: 'Label',
  name: '',
  onChange: () => {},
  placeholder: 'Insert text here',
  value: 'Input value',
};

const Template: ComponentStory<typeof TextAreaField> = (args) => {
  const [value, setValue] = useState<string>('Lorem Ipsum');

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <TextAreaField
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
