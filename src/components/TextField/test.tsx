import React from 'react';

import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';

import { TextField } from '.';
import { Props } from './type';

const mockRandomValues = () => {
  const mockFn = jest.fn();
  const label = faker.name.prefix();
  const tagName = faker.name.suffix();
  const icon = faker.name.jobArea();
  const error = faker.lorem.words(6);
  const value = faker.name.fullName();
  const valueChanged = faker.name.fullName();

  return { error, icon, label, mockFn, tagName, value, valueChanged };
};

function componentMock(args: Props) {
  return <TextField {...args} />;
}

describe('TextField', () => {
  test('should start with randomvalue and get mockFn with randomvalueChange', () => {
    const { mockFn, value, tagName, valueChanged, label } = mockRandomValues();

    render(
      componentMock({
        label,
        name: tagName,
        onChange: (e) => mockFn(e.target.value),
        value,
      })
    );

    const input = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;
    expect(input.value).toBe(value);

    fireEvent.change(input, { target: { value: valueChanged } });

    expect(screen.queryByText(label)).toBeInTheDocument();
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(valueChanged);
  });

  test('should check input disabled', () => {
    const { mockFn, value, tagName, label } = mockRandomValues();
    render(
      componentMock({
        disabled: true,
        label,
        name: tagName,
        onChange: (e) => mockFn(e.target.value),
        value,
      })
    );

    const input = document.getElementById(`textfield-${tagName}`) as HTMLInputElement;

    expect(input).toBeDisabled();
  });

  xtest('should show icon field', () => {
    const { icon, mockFn, value, label, tagName } = mockRandomValues();
    render(
      componentMock({
        icon,
        label,
        name: tagName,
        onChange: (e) => mockFn(e.target.value),
        value,
      })
    );

    const iconElement = screen.queryByText(icon);

    expect(screen.queryByText(label)).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  xtest('should show error element and message', () => {
    const { mockFn, value, tagName, label, error } = mockRandomValues();
    render(
      componentMock({
        error: true,
        errorText: error,
        label,
        name: tagName,
        onChange: (e) => mockFn(e.target.value),
        value,
      })
    );

    const input = document.getElementById(`textfield-error-${tagName}`) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(screen.queryByText(label)).toBeInTheDocument();
    expect(screen.queryByText(error)).toBeInTheDocument();
  });

  xtest('should not show error message when error is false and have errorText', () => {
    const { mockFn, value, tagName, label, error } = mockRandomValues();
    render(
      componentMock({
        errorText: error,
        label,
        name: tagName,
        onChange: (e) => mockFn(e.target.value),
        value,
      })
    );

    expect(screen.queryByText(label)).toBeInTheDocument();
    expect(screen.queryByText(error)).not.toBeInTheDocument();
  });

  xtest('should not show error is true and errorText is empty', () => {
    const { mockFn, value, tagName, label } = mockRandomValues();
    render(
      componentMock({
        error: true,
        label,
        name: tagName,
        onChange: (e) => mockFn(e.target.value),
        value,
      })
    );

    const input = document.getElementById('textfield-error-test') as HTMLInputElement;

    expect(input).not.toBeInTheDocument();
  });
});
