import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from '.';

describe('Switch enabled', () => {
  test('renders label', () => {
    const label = 'Aceito os termos de uso';
    const handleCheckedChange = jest.fn();

    render(<Switch checked={false} id="switch-enabled" label={label} onChange={handleCheckedChange} />);

    const switchLabel = screen.getByText(label);

    expect(switchLabel).toBeInTheDocument();
  });

  test('calls onChange prop when clicked', () => {
    const label = 'Aceito os termos de uso';
    const handleCheckedChange = jest.fn();

    render(<Switch checked={false} id="switch-enabled" label={label} onChange={handleCheckedChange} />);

    const switchLabel = screen.getByText(label);

    userEvent.click(switchLabel);

    expect(handleCheckedChange).toBeCalledTimes(1);
  });
});

describe('Switch disabled', () => {
  test('doesnt call onChange prop when clicked', () => {
    const label = 'Aceito os termos de uso';
    const handleCheckedChange = jest.fn();

    render(<Switch checked={false} disabled id="switch-enabled" label={label} onChange={handleCheckedChange} />);

    const switchLabel = screen.getByText(label);

    userEvent.click(switchLabel);

    expect(handleCheckedChange).not.toBeCalled();
  });
});
