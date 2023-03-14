import React, { ChangeEvent, FC, Fragment, useCallback, useRef } from 'react';

import { Button } from '~/components/Button';

import { ButtonsWrapper, Image, Input, Root } from './style';
import { Props } from './types';

export const ImageUpload: FC<Props> = ({ defaultValue, name, onChange, size, value }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectImage = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  const removeImage = useCallback(() => {
    onChange(null);
  }, [onChange]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
      onChange(e.target.result as string);
    });

    reader.readAsDataURL(event.target.files[0]);
  }, []);

  return (
    <Root>
      <Image size={size} src={value || defaultValue} />
      <ButtonsWrapper>
        {value ? (
          <Fragment>
            <Button color="primary" label="Trocar imagem" onClick={selectImage} size={size} />
            <Button color="primary" label="Remover imagem" onClick={removeImage} size={size} />
          </Fragment>
        ) : (
          <Button color="primary" label="Selecionar imagem" onClick={selectImage} size={size} />
        )}
      </ButtonsWrapper>
      <Input accept="image/*" name={name} onChange={handleChange} ref={fileInputRef} role="input" type="file" />
    </Root>
  );
};
