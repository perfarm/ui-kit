import React from 'react';

import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';

import { TextField } from '.';

const mockRandomValues = () => {
  const mockFn = jest.fn();
  const label = faker.name.prefix();
  const tagName = faker.name.suffix();
  const icon = faker.name.jobArea();
  const errorText = faker.lorem.words(6);
  const value = faker.name.fullName();
  const valueChanged = faker.name.fullName();

  return { errorText, icon, label, mockFn, tagName, value, valueChanged };
};

describe('TextField', () => {
  test('should start with value and get mockFn with valueChanged', () => {
    const { mockFn, tagName, value, valueChanged } = mockRandomValues();
    render(<TextField name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const inputElement = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;

    expect(inputElement.value).toBe(value);

    fireEvent.change(inputElement, { target: { value: valueChanged } });

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(valueChanged);
  });

  test('should disabled input and not call event', () => {
    const { mockFn, tagName, value, valueChanged } = mockRandomValues();
    render(<TextField disabled name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const inputElement = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;

    expect(inputElement).toBeDisabled();
    expect(inputElement.value).toBe(value);

    fireEvent.change(inputElement, { target: { value: valueChanged } });

    expect(mockFn).not.toBeCalled();
  });

  test('should show icon element', () => {
    const { icon, mockFn, tagName, value } = mockRandomValues();
    render(<TextField icon={icon} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const iconElement = screen.queryByText(icon);

    expect(iconElement).toBeInTheDocument();
  });

  test('should show label element', () => {
    const { label, mockFn, tagName, value } = mockRandomValues();
    render(<TextField label={label} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const labelElement = screen.queryByText(label);

    expect(labelElement).toBeInTheDocument();
  });

  test('should show error element and message', () => {
    const { errorText, mockFn, tagName, value } = mockRandomValues();
    render(
      <TextField errorText={errorText} hasError name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />
    );

    const errorElement = document.getElementById(`textfield-error-${tagName}`) as HTMLInputElement;

    expect(errorElement).toBeInTheDocument();
    expect(screen.queryByText(errorText)).toBeInTheDocument();
  });

  test('should not show error message when error is false and have errorText', () => {
    const { errorText, mockFn, tagName, value } = mockRandomValues();
    render(<TextField errorText={errorText} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    expect(screen.queryByText(errorText)).not.toBeInTheDocument();
  });

  test('should not show errorElement when hasError is true and errorText is empty', () => {
    const { mockFn, tagName, value } = mockRandomValues();
    render(<TextField hasError name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const errorElement = document.getElementById(`textfield-error-${tagName}`) as HTMLInputElement;

    expect(errorElement).not.toBeInTheDocument();
  });
});
