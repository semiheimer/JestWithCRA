import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';

const useCustomHook = () => {
  const [name, setName] = useState('Ali');
  const changeName = (newName) => {
    setName(newName);
  };
  return { name, changeName };
};

test('customHook', async () => {
  const { result } = renderHook(useCustomHook);
  expect(result.current.name).toBe('Ali');

  await act(() => {
    result.current.changeName('Veli');
  });

  expect(result.current.name).toBe('Veli');
  expect(result.current.name).toEqual('Veli');
});
