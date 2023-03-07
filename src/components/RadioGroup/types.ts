export interface Props {
  ariaLabel?: string;
  disabled?: boolean;
  items: Array<{ id: string; label: string }>;
  onValueChange: (value: string) => void;
  value: string;
}
