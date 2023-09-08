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

// userEvent
test('should render element  correctly1', async () => {
  const user = userEvent.setup();
  render(<Test5 />);

  await user.pointer([
    {
      keys: '[MouseLeft]',
      target: screen.getByRole('button', { name: 'Increment' }),
    },
  ]);

  // const element = screen.getByRole('heading');
  const element = await screen.findByRole('heading');
  expect(element).toHaveTextContent('1');
});

// keyboard
// keyboard("foo")  f o o tuşları
// keyboard("{Shift}{f}{o}{o}"") Shift f o o
// keyboard("{a>}")  a basılı tutmak
// keyboard("{a>5}") a basılı tutarken 5'e basmak
// keyboard("{a>5/}") a basılıyken 5 e bas ve klavyeden elini çekmiş
test('should render keyboard event  correctly2', async () => {
  const user = userEvent.setup();
  render(<Test5 />);
  // element içinde en üstte input altında 2 adet button ve altında yine input
  // var. imcrement butonuna erişebilmek için ya direkt olarak focus olması
  // ya da 2 defa tab 1 defa entera basılması gerekir

  const buttonElement = screen.getByRole('button', { name: 'Increment' });
  // await user.keyboard('[tab]');
  // await user.keyboard('[tab]');
  buttonElement.focus();
  await user.keyboard('[enter]');

  const headElement = screen.getByRole('heading');

  expect(buttonElement).toHaveFocus();
  expect(headElement).toHaveTextContent('1');
});
