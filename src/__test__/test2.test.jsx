import { render, screen } from '@testing-library/react';
import React from 'react';

function Test2({ suffix }) {
  return (
    <>
      <label htmlFor="username-input">
        deneme
        <input
          id="username-input"
          placeholder="write something"
          defaultValue="3"
        />
      </label>

      <img src="#" alt="deneme 3" />
      <div title="MODERN">deneme 4</div>
      <div data-testid="1234567">modern testing</div>
      <div>
        {suffix && <p>{suffix}</p>}
        {!suffix && <p>Suffix yok</p>}
      </div>
    </>
  );
}

// getByLabelText
test('should render label correctly', () => {
  render(<Test2 />);
  const appElement = screen.getByLabelText('deneme');
  expect(appElement).toBeInTheDocument();
});

// getByPlaceholderText
test('should render label placeholder correctly', () => {
  render(<Test2 />);
  const appElement = screen.getByPlaceholderText('write something');
  expect(appElement).toBeInTheDocument();
});

// getByText
test('should render by text correctly', () => {
  render(<Test2 />);
  const appElement = screen.getByText('deneme');
  expect(appElement).toBeInTheDocument();
});

// getByDisplayValue
test('should render input display correctly', () => {
  render(<Test2 />);
  const appElement = screen.getByDisplayValue('3');

  expect(appElement).toBeInTheDocument();
});

// getByAltText
test('should render img element correctly', () => {
  render(<Test2 />);
  const appElement = screen.getByAltText('deneme 3');

  expect(appElement.src).toBe('http://localhost/#');
});

// getByTitle
test('should render title element correctly', () => {
  render(<Test2 />);
  const appElement = screen.getByTitle('MODERN');

  expect(appElement).toBeInTheDocument();
});

// getByTestId
test('should render element with id  correctly', () => {
  render(<Test2 />);
  const appElement = screen.getByTestId('1234567');

  expect(appElement).toBeInTheDocument();
});

// queryBy && not
test('should render no element  correctly', () => {
  render(<Test2 suffix="Test" />);
  const emptyElement = screen.queryByText('Suffix yok');

  expect(emptyElement).not.toBeInTheDocument();
});
