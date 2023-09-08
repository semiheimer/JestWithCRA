describe('Mock implementation', () => {
  it('returns undefined by default', async () => {
    const mock = jest.fn();
    const result = mock('some arguments');

    expect(result).toBe(undefined);
    expect(result).toBeUndefined();
    expect(result).toBeFalsy();
    expect(result).not.toBeTruthy();

    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalled();

    expect(mock).toBeCalledTimes(1);
    expect(mock).toHaveBeenCalledTimes(1);

    expect(mock).toBeCalledWith('some arguments');
  });

  // mock implemantation
  it('mock implemantation', async () => {
    const mock = jest.fn(() => 'returned this value');
    const result = mock('some arguments');

    expect(result).not.toBe(undefined);
    expect(result).not.toBeUndefined();
    expect(result).not.toBeFalsy();
    expect(result).toBeTruthy();

    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalled();

    expect(mock).toBeCalledTimes(1);
    expect(mock).toHaveBeenCalledTimes(1);

    expect(mock).toBeCalledWith('some arguments');
  });

  // mockImplementation
  it('extra mock implemantation', async () => {
    const mock = jest.fn().mockImplementation(() => 'returned this value');
    const result = mock('some arguments');

    expect(result).not.toBe(undefined);
    expect(result).not.toBeUndefined();
    expect(result).not.toBeFalsy();
    expect(result).toBeTruthy();

    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalled();

    expect(mock).toBeCalledTimes(1);
    expect(mock).toHaveBeenCalledTimes(1);

    expect(mock).toBeCalledWith('some arguments');
  });

  // mockImplementationOnce
  it('mock implemantation one time', async () => {
    const mock = jest
      .fn()
      .mockImplementationOnce(() => 'returned this value');
    const result = mock('some arguments');

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
    // mockImplementationOnce ile olduğu için bir kere döndükten sonra
    // default değerine döner yani undefined döner
    const result1 = mock('some arguments1');
    expect(result1).toBe(undefined);
    expect(mock).toBeCalledTimes(2);
  });

  // ********* ÖNEMLİ **********
  // promise ise mockResolvedValue ile yap değilse aşağıdaki gibi
  it('mock implemantation one time1', () => {
    // const mock = jest.fn().mockReturnValue('returned this valuee');
    const mock = jest.fn();
    mock.mockReturnValue('returned this valuee');
    const result = mock('some argumentss');

    expect(result).not.toBe(undefined);
    expect(result).not.toBeUndefined();
    expect(result).not.toBeFalsy();
    expect(result).toBeTruthy();
    expect(result).toBe('returned this valuee');

    expect(mock).toBeCalled();
    expect(mock).toHaveBeenCalled();

    expect(mock).toBeCalledTimes(1);
    expect(mock).toHaveBeenCalledTimes(1);

    expect(mock).toBeCalledWith('some argumentss');
    expect(mock).toHaveBeenCalledWith('some argumentss');
  });
});
