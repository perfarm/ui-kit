import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

export interface Props {
  checked: RadixSwitchProps['checked'];
  disabled?: boolean;
  id: string;
  label: string;
  onChange: RadixSwitchProps['onCheckedChange'];
}
