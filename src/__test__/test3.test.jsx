import { render, screen } from '@testing-library/react';
import React from 'react';

function Test({ products }) {
  //   return <ul>
  //   <li>deneme 1</li>
  //   <li>deneme 2</li>
  //   <li>deneme3</li>
  // </ul>
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>
          {product}
        </li>
      ))}
    </ul>
  );
}

// getAllByRole && toHaveLength
test('should render element list  correctly', () => {
  const products = ['pro-1', 'pro-2', 'pro-3'];
  render(<Test products={products} />);
  const appElements = screen.getAllByRole('listitem');

  // expect(appElements.length).toBe(products.length);
  expect(appElements).toHaveLength(3);
});

// getAllByText && toHaveTextContent
test('should render element list text correctly', () => {
  const products = ['pro-1', 'pro-2', 'pro-3'];
  render(<Test products={products} />);
  const appElements = screen.getAllByText(/pro-/i, { exact: false });
  // const appElements = screen.getAllByText("pro-",{exact:false})

  appElements.forEach((element) => {
    expect(element).toHaveTextContent('pro-');
  });
});

// getAllByRole && toHaveTextContent
test('should render element list correctly', () => {
  const products = ['pro-1', 'pro-2', 'pro-3'];
  render(<Test products={products} />);
  const listItems = screen.getAllByRole('listitem');

  listItems.forEach((item) => {
    expect(item).toHaveTextContent('pro-');
  });
});
