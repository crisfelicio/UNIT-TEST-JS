const { soma, multiplicacao, calculo } = require('../src/calculator');

describe('Testes de Integração para o Módulo Calculator', () => {
    test('Testando o cálculo com as funções de soma e multiplicação', () => {
      const result = calculo(2, 3, 4); // (2 + 3) * 4 = 20
      expect(result).toBe(20);
    });
  
    test('Testando cálculo com números diferentes', () => {
      const result = calculo(1, 1, 10); // (1 + 1) * 10 = 20
      expect(result).toBe(20);
    });
  });