const functions = require('./challenges.js');

describe('is functions?', () => {
  it('encode is a function?', () => {
    expect(typeof functions.encode).toBe('function');
  });
  it('decode is a function?', () => {
    expect(typeof functions.decode).toBe('function');
  });
});
