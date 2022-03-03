const convertToSpaces = require('../convertToSpaces');

describe('convert to spaces test', function() {
  it('when hello world, returns hello world', function() {
    const input = "hello world";
    const expected = "hello world";
    const actual = convertToSpaces(input);
    expect(actual).toBe(expected);
  })
  it('when hello%world, returns hello world', function() {
    const input = "hello%world";
    const expected = "hello world";
    const actual = convertToSpaces(input);
    expect(actual).toBe(expected);
  })
  it('when !hello world, returns  hello world', function() {
    const input = "!hello world";
    const expected = " hello world";
    const actual = convertToSpaces(input);
    expect(actual).toBe(expected);
  })
  it('when ;hello?world!, returns  hello world ', function() {
    const input = ";hello?world!";
    const expected = " hello world ";
    const actual = convertToSpaces(input);
    expect(actual).toBe(expected);
  })
  it('when hello;world, returns hello world', function() {
    const input = "hello;world";
    const expected = "hello world";
    const actual = convertToSpaces(input);
    expect(actual).toBe(expected);
  })
  it('when hello world?, returns hello world ', function() {
    const input = "hello world?";
    const expected = "hello world ";
    const actual = convertToSpaces(input);
    expect(actual).toBe(expected);
  })
})
