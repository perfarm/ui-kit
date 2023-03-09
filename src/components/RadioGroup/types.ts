import { RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';

export interface Item {
  label: string;
  value: string;
}

export interface Props {
  ariaLabel?: string;
  disabled?: boolean;
  items: Item[];
  onChange: RadixRadioGroupProps['onValueChange'];
  value: RadixRadioGroupProps['value'];
}
