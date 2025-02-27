/* eslint-disable @typescript-eslint/no-require-imports */

['path'].forEach((module) => jest.mock(module));

jest.mock('express', () => {
  const express = () => ({
    get: () => {},
    listen: () => {},
    use: () => {},
  });
  express.static = () => {};
  return express;
});

describe('server', () => {
  it('should run', () => {
    require('../../server');
  });
});
