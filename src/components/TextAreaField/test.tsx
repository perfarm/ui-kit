import React from 'react';

import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextAreaField } from '.';

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

describe('TextAreaField', () => {
  test('should call mockFn with valueChanged when user type', () => {
    const { mockFn, tagName, valueChanged } = mockRandomValues();
    render(<TextAreaField name={tagName} onChange={(e) => mockFn(e.target.value)} />);

    const inputElement = document.getElementById(`textarea-${tagName}`) as HTMLInputElement;

    userEvent.type(inputElement, valueChanged);

    expect(mockFn).toHaveBeenCalledWith(valueChanged);
  });

  test('should disabled input and not call event', () => {
    const { mockFn, tagName, value, valueChanged } = mockRandomValues();
    render(<TextAreaField disabled name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const inputElement = document.getElementById(`textarea-${tagName}`) as HTMLInputElement;

    expect(inputElement).toBeDisabled();
    expect(inputElement.value).toBe(value);

    userEvent.type(inputElement, valueChanged);

    expect(mockFn).not.toBeCalled();
  });

  test('should show icon element', () => {
    const { icon, mockFn, tagName, value } = mockRandomValues();
    render(<TextAreaField icon={icon} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const iconElement = screen.queryByText(icon);

    expect(iconElement).toBeInTheDocument();
  });

  test('should show label element', () => {
    const { label, mockFn, tagName, value } = mockRandomValues();
    render(<TextAreaField label={label} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const labelElement = screen.queryByText(label);

    expect(labelElement).toBeInTheDocument();
  });

  test('should show error element and message', () => {
    const { errorText, mockFn, tagName, value } = mockRandomValues();
    render(
      <TextAreaField
        errorText={errorText}
        hasError
        name={tagName}
        onChange={(e) => mockFn(e.target.value)}
        value={value}
      />
    );

    expect(screen.queryByText(errorText)).toBeInTheDocument();
  });

  test('should not show error message when error is false and have errorText', () => {
    const { errorText, mockFn, tagName, value } = mockRandomValues();
    render(
      <TextAreaField errorText={errorText} name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />
    );

    expect(screen.queryByText(errorText)).not.toBeInTheDocument();
  });

  test('should not show errorElement when hasError is true and errorText is empty', () => {
    const { mockFn, tagName, value } = mockRandomValues();
    render(<TextAreaField hasError name={tagName} onChange={(e) => mockFn(e.target.value)} value={value} />);

    const errorElement = document.getElementById(`textarea-error-${tagName}`) as HTMLInputElement;

    expect(errorElement).not.toBeInTheDocument();
  });
});
