import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('Button onClick and label', () => {
  const label = 'Salvar';

  const handleClick = jest.fn();

  render(<Button label={label} color="primary" size="medium" onClick={handleClick} />);

  const button = screen.getByRole('button', { name: label });

  test('calls onClick prop when clicked', () => {
    userEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });

  test('renders label', () => {
    expect(button).toHaveTextContent(label);
  });
});

describe('Button disabled', () => {
  const label = 'Button disabled';

  const handleClick = jest.fn();

  render(<Button label={label} color="primary" size="medium" onClick={handleClick} disabled />);

  const button = screen.getByRole('button', { name: label });

  test('dont call onClick prop when clicked', () => {
    userEvent.click(button);

    expect(handleClick).toBeCalledTimes(0);
  });
});
