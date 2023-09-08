import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

function Test6() {
  return (
    <textarea
      defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas distinctio exercitationem excepturi libero numquam voluptatum doloribus dolores odio sequi eum minus esse possimus dolorem, iusto ut? Sapiente, esse architecto!"
    />
  );
}

function Test7() {
  return (
    <select multiple>
      <option value="elma">Elma</option>
      <option value="armut">Armut</option>
      <option value="kiraz">Kiraz</option>
    </select>
  );
}
// Utility APIs

// clear
test('clear', async () => {
  const user = userEvent.setup();
  render(<Test6 />);

  const element = screen.getByRole('textbox');

  user.clear(element);
  expect(element).toHaveValue('');
});

// selectOptions, deselectOptions
test('clear2', async () => {
  const user = userEvent.setup();
  render(<Test7 />);
  const elements = screen.getByRole('listbox');

  // ister value ister name ile seç
  await user.selectOptions(elements, ['elma', 'Armut']);

  const selectedElement1 = screen.getByRole('option', { name: 'Elma' });
  const selectedElement2 = screen.getByRole('option', { name: 'Armut' });
  const selectedElement3 = screen.getByRole('option', { name: 'Kiraz' });

  expect(selectedElement1.selected).toBe(true);
  expect(selectedElement3.selected).toBe(false);

  // Dördüde aynı işlevi görür
  expect(selectedElement2.selected).toBe(true);
  expect(selectedElement2.selected).toBeTruthy();
  expect(selectedElement2.selected).not.toBeFalsy();
  expect(selectedElement2).toHaveTextContent('Armut');

  await user.deselectOptions(elements, ['elma', 'Armut']);
  expect(selectedElement1.selected).toBe(false);
  expect(selectedElement2.selected).toBe(false);
});
