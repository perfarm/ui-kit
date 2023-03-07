export interface Props {
  ariaLabel?: string;
  disabled?: boolean;
  items: Array<{ id: string; label: string }>;
  onChange: (value: string) => void;
  value: string;
}
