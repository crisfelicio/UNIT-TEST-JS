function soma(a, b) {
    return a + b;
  }
  
function multiplicacao(a, b) {
    return a * b;
}

function calculo(x, y, z) {
  return multiplicacao(soma(x, y), z);
}

  module.exports = {
    soma,
    multiplicacao,
    calculo,
  };