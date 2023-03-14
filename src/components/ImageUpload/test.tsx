import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ImageUpload } from '.';

test('uploads image', async () => {
  let value: string;

  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  let fileInBase64: string;

  const reader = new FileReader();

  reader.addEventListener('load', (e) => {
    fileInBase64 = e.target.result as string;
  });

  reader.readAsDataURL(file);

  render(
    <ImageUpload
      defaultValue=""
      name="image-uploader"
      onChange={(newValue) => {
        value = newValue;
      }}
      size="small"
      value={value}
    />
  );

  const input = screen.getByRole('input') as HTMLInputElement;

  userEvent.upload(input, file);

  expect(fileInBase64).toStrictEqual(value);
});
