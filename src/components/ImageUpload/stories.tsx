import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { styled } from '~/config/theme';

import { ImageUpload as ImageUploadComponent } from '.';

const TemplateRoot = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
});

const TemplateImage = styled('img', {
  height: '220px',
});

export default {
  component: ImageUploadComponent,
  title: 'Components/ImageUpload',
} as ComponentMeta<typeof ImageUploadComponent>;

const Template: ComponentStory<typeof ImageUploadComponent> = (args) => {
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <TemplateRoot>
      <ImageUploadComponent
        {...args}
        setImageSrc={(imgSrc) => {
          setImageSrc(imgSrc);
        }}
      />
      {imageSrc && <TemplateImage src={imageSrc} />}
    </TemplateRoot>
  );
};

export const ImageUpload = Template.bind({});

ImageUpload.args = {
  buttonProps: {
    color: 'primary',
    label: 'Upload image',
    size: 'small',
  },
};

ImageUpload.storyName = 'ImageUpload';
