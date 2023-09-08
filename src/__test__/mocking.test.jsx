import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

function Button({ onClick, children }) {
  const handleClick = () => {
    onClick('clicked on me');
  };

  return <button type="button" onClick={handleClick}>{children}</button>;
}

describe('Button events', () => {
  it('should call onClick function when clicked', async () => {
    const user = userEvent.setup();
    const buttonFunction = jest.fn();
    render(<Button onClick={buttonFunction}>deneme</Button>);

    const button = screen.getByRole('button', { name: 'deneme' });
    await user.click(button);

    expect(buttonFunction).toBeCalled();
    expect(buttonFunction).toBeCalledTimes(1);
    expect(buttonFunction).toHaveBeenCalledTimes(1);
    expect(buttonFunction).toBeCalledWith('clicked on me');
  });
});
