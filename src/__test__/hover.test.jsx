import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function Test({ onChange }) {
  return <input type="checkbox" onChange={onChange} />;
}

// hover
test('hover/unhover', async () => {
  const user = userEvent.setup();
  render(<Test />);

  const hoverBox = screen.getByRole('checkbox');
  let isHover = false;

  hoverBox.addEventListener('mouseover', () => {
    isHover = true;
  });
  hoverBox.addEventListener('mouseout', () => {
    isHover = false;
  });

  expect(isHover).toBeFalsy();

  await user.hover(hoverBox);

  expect(isHover).toBeTruthy();

  await user.unhover(hoverBox);

  expect(isHover).toBeFalsy();
});
