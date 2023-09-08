import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

function Test() {
  return (
    <div>
      <input type="text" />
    </div>
  );
}

// type
test('type', async () => {
  const user = userEvent.setup();
  render(<Test />);
  const inputElement = screen.getByRole('textbox');
  await user.type(inputElement, 'Hello');

  // Üçüde aynı işe yarar
  expect(inputElement.value).toBe('Hello');
  expect(inputElement.value).toBeTruthy();
  expect(inputElement).toHaveValue('Hello');
});
