import React from 'react';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioGroup } from '.';

describe('RadioGroup enabled', () => {
  test('renders item label', () => {
    const items = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
    ];

    const handleValueChange = jest.fn();

    render(<RadioGroup items={items} onChange={handleValueChange} value={items[0].value} />);

    const firstItemLabel = screen.getByText(items[0].label);

    expect(firstItemLabel).toBeInTheDocument();
  });

  test('calls onChange prop when clicked on a not selected item', async () => {
    const items = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
    ];

    const handleValueChange = jest.fn();

    render(<RadioGroup items={items} onChange={handleValueChange} value={items[0].value} />);

    const secondItemLabel = screen.getByText(items[1].label);

    await act(async () => {
      userEvent.click(secondItemLabel);
    });

    expect(handleValueChange).toBeCalledTimes(1);
  });
});

describe('Switch disabled', () => {
  test('doesnt call onChange prop when clicked on a not selected item', () => {
    const items = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
    ];

    const handleValueChange = jest.fn();

    render(<RadioGroup disabled items={items} onChange={handleValueChange} value={items[0].value} />);

    const secondItemLabel = screen.getByText(items[1].label);

    userEvent.click(secondItemLabel);

    expect(handleValueChange).not.toBeCalled();
  });
});
