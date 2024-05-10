const add = require('../src/add');

describe('Testando a função add', () => {
  test('2 + 3 deve ser 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('-1 + 1 deve ser 0', () => {
    expect(add(-1, 1)).toBe(0);
  });

  test('0 + 0 deve ser 0', () => {
    expect(add(0, 0)).toBe(0);
  });

});