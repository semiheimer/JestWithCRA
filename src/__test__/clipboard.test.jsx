import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

function Test5() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('Hello');

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log('Metin panoya kopyalandı.');
      })
      .catch((error) => {
        console.error('Metin kopyalanırken bir hata oluştu:', error);
      });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        data-testid="first-input"
      />
      <button type="button" onClick={handleIncrement} id="first-button">
        Increment
      </button>
      <button type="button" onClick={handleCopy} name="second-button">
        Copy
      </button>
      <input type="text" data-testid="second-input" />
    </div>
  );
}

// Clipboard elements

test('paste', async () => {
  const user = userEvent.setup();
  render(<Test5 />);
  const copyButton = screen.getByRole('button', { name: 'Copy' });
  copyButton.focus();
  // await user.keyboard('[tab]');
  await user.keyboard('[enter]');
  const secondInput = screen.getByTestId('second-input');
  secondInput.focus();
  await user.paste();
  expect(secondInput).toHaveValue('Hello');
});
