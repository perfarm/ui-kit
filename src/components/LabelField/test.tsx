import React from 'react';

import { faker } from '@faker-js/faker';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LabelField } from '.';

const mockRandomValues = () => {
  const label = faker.name.prefix();
  const tooltipDescription = faker.lorem.paragraph(2);
  const requiredDescription = faker.lorem.word(1);
  const childrenText = faker.lorem.words(3);
  const elementId = faker.lorem.words(1);

  return { childrenText, elementId, label, requiredDescription, tooltipDescription };
};

describe('LabelField', () => {
  test('should show childrenText', () => {
    const { childrenText, elementId } = mockRandomValues();
    render(<LabelField elementId={elementId}>{childrenText}</LabelField>);

    expect(screen.queryByText(childrenText)).toBeTruthy();
  });

  test('should show childrenText when click in elementIcon', async () => {
    const { childrenText, elementId, tooltipDescription } = mockRandomValues();
    render(
      <LabelField elementId={elementId} tooltipDescription={tooltipDescription}>
        {childrenText}
      </LabelField>
    );

    const elementIcon = document.querySelector('[data-state="closed"]');

    await act(async () => {
      userEvent.click(elementIcon);
    });

    expect(elementIcon).toHaveAttribute('data-state', 'instant-open');
  });

  test('should show requiredDescription when required true', async () => {
    const { childrenText, elementId, requiredDescription } = mockRandomValues();
    render(
      <LabelField elementId={elementId} required requiredDescription={requiredDescription}>
        {childrenText}
      </LabelField>
    );

    expect(screen.queryByText(requiredDescription)).toBeTruthy();
  });
});
