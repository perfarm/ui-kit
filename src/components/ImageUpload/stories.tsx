import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageUpload as ImageUploadComponent } from '.';

export default {
  component: ImageUploadComponent,
  title: 'Components/ImageUpload',
} as ComponentMeta<typeof ImageUploadComponent>;

const Template: ComponentStory<typeof ImageUploadComponent> = (args) => {
  const [value, setValue] = useState(null);

  return (
    <ImageUploadComponent
      {...args}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      value={value}
    />
  );
};

export const ImageUpload = Template.bind({});

ImageUpload.args = {
  defaultValue:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAALGPC/xhBQAABQVJREFUeAHtnPtLFFEUx8+sb3PNR5q2hWtBDxIiK3pAZQU9fwjL/pH6O/pLMsKgsh96GlkQRVH0gMpHRmXlppVvt5lLDgpt6ZnZ2XtOX0EYZ+fce87ns+feu0Y6hztPpwlfagnE1FaGwgwBCFb+RoBgCFZOQHl56GAIVk5AeXnoYAhWTkB5eehgCFZOQHl56GAIVk5AeXnoYAhWTkB5eehgCFZOQHl56GAIVk5AeXnoYAhWTkB5eehgCFZOQHl56GAIVk5AeXnoYAhWTkB5eehgCFZOQHl56GAIVk5AeXnoYAhWTkB5eehgCFZOQHl56GAIVk5AeXnoYAhWTkB5eehgCFZOQHl5+VLr21GzkU417jPpn3t7g+4NPvNLWb+0gdoaW2hnbRPFnPAWqRepXuro66I7H57QVHran8/mC0fSX7orcPJo/4qtRt7KJbXzuL778Yna396k6+8f0ORv+HUlVdTasJcOJrZRcX7RvOeD/PB1fJgu93eb76GJkSBDZT1WhOCy/BI6tmoXHW/YTZVF8b9CGRofoY7eLrrUf5e+T42aZ734o6t2mviqovK/xi/mxcmZKer68Nh09atv/YsJjexZqwXXFFeYDjy8cjuVLLIDR6fGqfPdfbrQe4sGx1IGaL67ArTUN9OJ5F5qjNeHCtlbvi/23THCbVq+rRS8Or6C2pL7aE/dJsqL5QUSMT0zTbfdLmvvuUFvRt77YzVXr3VFt9CWZev8e2Fc2LZ8WyV4swu9zYXeHDL0WXEPP790Rd+kR19ezd6iZFmdEd1Sv5kKYuGdOW1ZvnMu2Dvlep3qdeya8oQPPpsXr4cHTEd7nT2TnjFTVRbGzR7t7dXxgtJQp3+Z6jP7tLdfR71850xwcV4hHUpsp9bkHlrunnZz8fVx9Ctd6LlNVwfu09j0hEmhyM3LO3V7p+/60upQ08rF8h254IrCMtMp3qk47E7h2hiZ/GlO3d7pOzXx3QzjkEO7ljfRSXfL2FCR5A79x7gol+/IBCdKawysA4mtVBjiXvdHgsybE+7HnmsDD+i8u08P/BxkjmJXWNYFe+9+7+Dk/VbJcRy7qs+QTTqdpu5PT82B7HmqJ8NTMm5nXfCVQ2dlkMiQ5ZGrZ8wr2apjdvwM0we+HQs8AgawmgAEW60neHIQHJyh1SNAsNV6gicHwcEZWj0CBFutJ3hyEBycodUjhPfPJ8wys/058F9pZevz7b/mjep1dHBUpHM0DwTnCHxU00JwVKRzNE/O9+C5dWfaD+fu0wt5Zu6Y//s1Olj5OwCCIVg5AeXloYMhWDkB5eVZdYqee1rOxH0hz2SK/R/vY4lWbh2ClQu2aoleyC8xwnpGuVe/PHSwj0LnBQTr9OpXBcE+Cp0XEKzTq18VBPsodF5k/b+u6MQmpyp0sBxXrEwhmIVNThAEy3HFyhSCWdjkBEGwHFesTCGYhU1OEATLccXKFIJZ2OQEQbAcV6xMIZiFTU4QBMtxxcoUglnY5ARBsBxXrEwhmIVNThAEy3HFyhSCWdjkBEGwHFesTCGYhU1OEATLccXKFIJZ2OQEQbAcV6xMIZiFTU4QBMtxxcoUglnY5ARBsBxXrEwhmIVNThAEy3HFyhSCWdjkBEGwHFesTCGYhU1OEATLccXKFIJZ2OQEQbAcV6xMIZiFTU4QBMtxxcoUglnY5ARBsBxXrEwhmIVNThAEy3HFyhSCWdjkBP0CYL4ipHv78z8AAAAASUVORK5CYII=',
  size: 'small',
};

ImageUpload.storyName = 'ImageUpload';
