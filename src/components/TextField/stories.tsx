import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './index';
import { Props } from './type';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    value: { control: { type: 'text' } },
    icon: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof TextField>;

const defaultArgs: Props = {
  label: 'Label',
  error: false,
  value: 'Input value',
  placeholder: 'Insert text here',
  errorText: 'Text example of field error',
  name: '',
  onChange: () => {},
  disabled: false,
};

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState<number | string>('Lorem Ipsum amet');

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
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
  error: true,
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
