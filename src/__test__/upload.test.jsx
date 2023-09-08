import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

function Test() {
  return (
    <div>
      <label htmlFor="file-uploader">
        Upload file:
        <input id="file-uploader" type="file" multiple />
      </label>
    </div>
  );
}

// upload
test('upload file', async () => {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  render(<Test />);

  const input = screen.getByLabelText(/upload file/i);
  await userEvent.upload(input, file);

  expect(input.files[0]).toBe(file);
  expect(input.files.item(0)).toBe(file);
  expect(input.files).toHaveLength(1);
});

test('upload multiple files', async () => {
  render(<Test />);
  const files = [
    new File(['hello'], 'hello.png', { type: 'image/png' }),
    new File(['there'], 'there.png', { type: 'image/png' }),
  ];
  const input = screen.getByLabelText(/upload file/i);

  await userEvent.upload(input, files);

  expect(input.files).toHaveLength(2);
  expect(input.files[0]).toBe(files[0]);
  expect(input.files[1]).toBe(files[1]);
});
