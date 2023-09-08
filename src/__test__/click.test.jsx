import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

function Test({onChange}) {
    return <input type="checkbox" onChange={onChange} />;
}

// click
test('click', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(<Test onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
});

// double click
test('Double click', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(<Test onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    await user.dblClick(checkbox);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).not.toBeChecked();
});
