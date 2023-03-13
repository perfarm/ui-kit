import React from 'react';

import { faker } from '@faker-js/faker';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LabelField } from '.';

const mockRandomValues = () => {
  const label = faker.name.prefix();
  const iconText = faker.lorem.paragraph(2);
  const optionalText = faker.lorem.word(1);
  const childrenText = faker.lorem.words(3);
  const elementId = faker.lorem.words(1);

  return { childrenText, elementId, iconText, label, optionalText };
};

describe('LabelField', () => {
  test('should show childrenText', () => {
    const { childrenText, elementId } = mockRandomValues();
    render(<LabelField elementId={elementId}>{childrenText}</LabelField>);

    expect(screen.queryByText(childrenText)).toBeTruthy();
  });

  test('should show childrenText when click in elementIcon', async () => {
    const { childrenText, elementId, iconText } = mockRandomValues();
    render(
      <LabelField elementId={elementId} iconText={iconText}>
        {childrenText}
      </LabelField>
    );

    const elementIcon = document.querySelector('[data-state="closed"]');

    await act(async () => {
      userEvent.click(elementIcon);
    });

    expect(elementIcon).toHaveAttribute('data-state', 'instant-open');
  });

  test('should show OptionalText when isOptional true', async () => {
    const { childrenText, elementId, optionalText } = mockRandomValues();
    render(
      <LabelField elementId={elementId} isOptional optionalText={optionalText}>
        {childrenText}
      </LabelField>
    );

    expect(screen.queryByText(optionalText)).toBeTruthy();
  });
});
