import { Props as ButtonProps } from '../Button/types';

export interface Props {
  buttonProps: Omit<ButtonProps, 'onClick'>;
  setImageSrc: (imageSrc: string) => void;
}
