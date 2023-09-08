import React from 'react';
import { render } from '@testing-library/react';
import { customRender } from './test-utils';

function Test() {
  return (
    <div>
      <label htmlFor="checkbox">
        Check
        <input id="checkbox" type="checkbox" />
      </label>

    </div>
  );
}

// wrapper
test('wrapper', () => {
  render(<Test />, {
    wrapper: ({ children }) => <div className="wrapper">{children}</div>,
  });
  // screen.debug();
});

// custom render
test('custom render', async () => {
  customRender(<Test />);
  // screen.debug();
});
