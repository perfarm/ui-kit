import React, { ChangeEvent, FC, useRef, useCallback } from 'react';

import { Button } from '../Button';
import { Input } from './style';
import { Props } from './types';

export const ImageUpload: FC<Props> = ({ buttonProps, setImageSrc }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
      setImageSrc(e.target.result as string);
    });

    reader.readAsDataURL(event.target.files[0]);
  }, []);

  return (
    <>
      <Button {...buttonProps} onClick={handleClick} />
      <Input accept="image/*" onChange={handleChange} ref={fileInputRef} role="input" type="file" />
    </>
  );
};
