import React from 'react';
import { faker } from '@faker-js/faker';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { TextField } from '.';

const mockFn = jest.fn();
const randomPrefix = faker.name.prefix();
const randomSuffix = faker.name.suffix();
const randomError = faker.lorem.words(4);
const randomName = faker.name.fullName();
const randomNameChange = faker.name.fullName();

afterEach(cleanup);

const component = (
  <TextField name="test" value={randomName} onChange={(e) => mockFn(e.target.value)} label={randomPrefix} />
);

const componentDisabled = (
  <TextField name="test" value={randomName} disabled onChange={(e) => mockFn(e.target.value)} label={randomPrefix} />
);

const componentIcon = (
  <TextField
    name="test"
    icon={randomSuffix}
    value={randomName}
    onChange={(e) => mockFn(e.target.value)}
    label={randomPrefix}
  />
);

const componentError = (show: boolean) => (
  <TextField
    name="test"
    value={randomName}
    onChange={(e) => mockFn(e.target.value)}
    label={randomPrefix}
    errorText={randomError}
    error={show}
  />
);

const componentErrorWithoutMessage = (
  <TextField name="test" value={randomName} onChange={(e) => mockFn(e.target.value)} label={randomPrefix} error />
);

describe('TextField', () => {
  test('should start with randomName and get mockFn with randomNameChange', () => {
    render(component);

    const input = document.getElementById('textfield-test') as HTMLInputElement;

    expect(input.value).toBe(randomName);

    fireEvent.change(input, { target: { value: randomNameChange } });

    expect(screen.queryByText(randomPrefix)).toBeInTheDocument();

    expect(mockFn).toBeCalledTimes(1);

    expect(mockFn).toHaveBeenCalledWith(randomNameChange);
  });

  test('should check input disabled', () => {
    render(componentDisabled);

    const input = document.getElementById('textfield-test') as HTMLInputElement;

    expect(input).toBeDisabled();
  });

  test('should show icon field', () => {
    render(componentIcon);

    const icon = screen.queryByText(randomSuffix);

    expect(screen.queryByText(randomPrefix)).toBeInTheDocument();

    expect(icon).toBeInTheDocument();
  });

  test('should show error element and message', () => {
    render(componentError(true));

    const input = document.getElementById('textfield-error-test') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    expect(screen.queryByText(randomPrefix)).toBeInTheDocument();

    expect(screen.queryByText(randomError)).toBeInTheDocument();
  });

  test('should not show error message when error is false and have errorText', () => {
    render(componentError(false));

    expect(screen.queryByText(randomPrefix)).toBeInTheDocument();

    expect(screen.queryByText(randomError)).not.toBeInTheDocument();
  });

  test('should not show error element when errorText is empty', () => {
    render(componentErrorWithoutMessage);

    const input = document.getElementById('textfield-error-test') as HTMLInputElement;

    expect(input).not.toBeInTheDocument();
  });
});
