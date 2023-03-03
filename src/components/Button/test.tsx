import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

describe('Button enabled', () => {
  test('renders label', () => {
    const label = 'Salvar';
    const handleClick = jest.fn();

    render(<Button color="primary" label={label} onClick={handleClick} size="medium" />);

    const button = screen.getByRole('button', { name: label });

    expect(button).toHaveTextContent(label);
  });

  test('calls onClick prop when clicked', () => {
    const label = 'Salvar';
    const handleClick = jest.fn();

    render(<Button color="primary" label={label} onClick={handleClick} size="medium" />);

    const button = screen.getByRole('button', { name: label });

    userEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});

describe('Button disabled', () => {
  test('doesnt call onClick prop when clicked', () => {
    const label = 'Button disabled';
    const handleClick = jest.fn();

    render(<Button color="primary" disabled label={label} onClick={handleClick} size="medium" />);

    const button = screen.getByRole('button', { name: label });

    userEvent.click(button);

    expect(handleClick).toBeCalledTimes(0);
  });
});
