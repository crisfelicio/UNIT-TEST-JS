const { soma, multiplicacao, calculo } = require('../src/calculator');

describe('Testando a função Soma', () => {
  test('2 + 3 deve ser 5', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('-1 + 1 deve ser 0', () => {
    expect(soma(-1, 1)).toBe(0);
  });

  test('0 + 0 deve ser 0', () => {
    expect(soma(0, 0)).toBe(0);
  });

});