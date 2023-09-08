import React from 'react';

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

// custom render
test('custom render', async () => {
  customRender(<Test />);
  //   screen.debug();
});
