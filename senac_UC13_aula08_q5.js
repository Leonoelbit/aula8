/**
 * Calcula o preço com desconto aplicado.
 * 
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} - O preço com o desconto aplicado.
 */
const calcularDesconto = (precoOriginal, porcentagemDesconto) => {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
};

// Exemplos de uso:
console.log(calcularDesconto(100, 10)); // 90
console.log(calcularDesconto(250, 20)); // 200