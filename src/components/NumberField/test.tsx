import React from 'react';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NumberField } from '.';

const mockRandomValues = () => {
  const mockFn = jest.fn();
  const label = faker.name.prefix();
  const tagName = faker.name.suffix();
  const icon = faker.name.jobArea();
  const valueText = faker.lorem.words(6);
  const valueNumber = faker.random.numeric(4);
  const valueNumberChanged = faker.random.numeric(8);

  return { icon, label, mockFn, tagName, valueNumber, valueNumberChanged, valueText };
};

describe('NumberField', () => {
  test('should not call mockFn with when insert text', () => {
    const { mockFn, tagName, valueText } = mockRandomValues();
    render(<NumberField name={tagName} onChange={(e) => mockFn(e.target.value)} />);

    const inputElement = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;

    userEvent.type(inputElement, valueText);

    expect(mockFn).not.toBeCalled();
  });

  test('should call mockFn with insert number', () => {
    const { mockFn, tagName, valueNumberChanged } = mockRandomValues();
    render(<NumberField name={tagName} onChange={(e) => mockFn(e.target.value)} />);

    const inputElement = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;

    userEvent.type(inputElement, valueNumberChanged);

    expect(mockFn).toBeCalledTimes(8);
    expect(mockFn).toBeCalledWith(valueNumberChanged);
  });
});
