describe('Mock promise', () => {
  // ********* ÖNEMLİ **********
  // promise değilse mockReturnValue ile promise ise aşağıdaki gibi
  it('mock promise resolution', async () => {
    const mock = jest.fn().mockResolvedValue('returned this value');
    const result = await mock('some arguments');

    expect(result).not.toBe(undefined);
    expect(result).not.toBeUndefined();
    expect(result).not.toBeFalsy();
    expect(result).toBeTruthy();
    expect(result).toBe('returned this value');

    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalled();

    expect(mock).toBeCalledTimes(1);
    expect(mock).toHaveBeenCalledTimes(1);

    expect(mock).toBeCalledWith('some arguments');
    expect(mock).toHaveBeenCalledWith('some arguments');
    // ********* ÖNEMLİ **********
    await expect(mock('some arg')).resolves.toBe('returned this value');
  });

  it('mock promise rejection', async () => {
    const error = new Error('Error message');
    const mock = jest.fn().mockRejectedValue(error);

    await expect(mock('some arg')).rejects.toThrowError();
    await expect(mock('some arg')).rejects.toThrow(error);
  });

  it('mock promise rejection1', async () => {
    const mock = jest.fn().mockRejectedValue('return reject reason');

    await expect(mock('some arg')).rejects.toBe('return reject reason');
  });
});
