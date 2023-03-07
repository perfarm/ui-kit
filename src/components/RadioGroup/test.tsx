import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioGroup } from '.';

describe('RadioGroup enabled', () => {
  test('renders item label', () => {
    const items = [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
    ];

    const handleValueChange = jest.fn();

    render(<RadioGroup items={items} onValueChange={handleValueChange} value={items[0].id} />);

    const firstItemLabel = screen.getByText(items[0].label);

    expect(firstItemLabel).toBeInTheDocument();
  });

  test('calls onValueChange prop when clicked on a not selected item', () => {
    const items = [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
    ];

    const handleValueChange = jest.fn();

    render(<RadioGroup items={items} onValueChange={handleValueChange} value={items[0].id} />);

    const secondItemLabel = screen.getByText(items[1].label);

    userEvent.click(secondItemLabel);

    expect(handleValueChange).toBeCalledTimes(1);
  });
});

describe('Switch disabled', () => {
  test('doesnt call onValueChange prop when clicked on a not selected item', () => {
    const items = [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
    ];

    const handleValueChange = jest.fn();

    render(<RadioGroup disabled items={items} onValueChange={handleValueChange} value={items[0].id} />);

    const secondItemLabel = screen.getByText(items[1].label);

    userEvent.click(secondItemLabel);

    expect(handleValueChange).toBeCalledTimes(0);
  });
});
