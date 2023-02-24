import React from 'react';
import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

const randomName = faker.name.fullName();

test('should have label', async () => {
  render(<Button label={randomName} />);

  expect(screen.getByRole('button')).toHaveTextContent(randomName);
});
