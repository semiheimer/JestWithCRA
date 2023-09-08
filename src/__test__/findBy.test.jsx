import { render, screen } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

function Test() {
  const [message, setMessage] = useState('Semih');

  useEffect(() => {
    setTimeout(() => {
      setMessage('Nuri');
    }, [300]);
  }, []);

  return <p>{message}</p>;
}

// queryByText && not
test('should render async element  correctly not', () => {
  render(<Test />);
  const element = screen.queryByText('Nuri');
  expect(element).not.toBeInTheDocument();
});

// findBY
test('should render async element  correctly', async () => {
  render(<Test />);
  const element = await screen.findByText(/Nuri/i);

  expect(element).toBeInTheDocument();
});

// findByText && queryByText
test('should render async element  correctly changing', async () => {
  render(<Test />);
  const elementIsExist = await screen.findByText('Nuri');

  // getByText("Semih") testi geçmez çünkü findBy async
  // olduğu için onu görene kadar bekler. Aşağı geçtiğinde olmadığı için hata verir.
  const elementShouldNotExist = screen.queryByText(/Semih/i);
  expect(elementIsExist).toBeInTheDocument();
  expect(elementShouldNotExist).not.toBeInTheDocument();
});
