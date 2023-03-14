import React from 'react';
import { act } from 'react-dom/test-utils';

import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from '.';

const mockRandomValues = () => {
  const childrenTrigger = faker.lorem.words(1);
  const textDescription = faker.lorem.words(4);

  return { childrenTrigger, textDescription };
};

describe('Tooltip', () => {
  test('should click textTrigger and show textDescription', async () => {
    const { childrenTrigger, textDescription } = mockRandomValues();
    render(<Tooltip description={textDescription}>{childrenTrigger}</Tooltip>);

    const elementTrigger = screen.getByText(childrenTrigger);

    expect(screen.queryAllByText(textDescription)).toHaveLength(0);

    await act(async () => {
      userEvent.click(elementTrigger);
    });

    const elementDescription = screen.queryAllByText(textDescription)[0];

    expect(elementTrigger).toBeInTheDocument();
    expect(elementDescription).toBeInTheDocument();
  });

  test('should start opened when isOpen is true', async () => {
    const { childrenTrigger, textDescription } = mockRandomValues();

    await act(async () => {
      render(
        <Tooltip description={textDescription} isOpen>
          {childrenTrigger}
        </Tooltip>
      );
    });

    expect(screen.queryAllByText(textDescription)).not.toHaveLength(0);
  });
});
