/**
 * Verifica se um número é par ou ímpar.
 * @param {number} num - O número a ser verificado.
 * @returns {string} - Retorna "Par" se o número for par, "Ímpar" caso contrário.
 */
function parOuImpar(num) {
    return (num % 2 === 0) ? "Par" : "Ímpar";
}

// Testando a função com os números 10, 15 e 22
console.log(parOuImpar(10)); // Par
console.log(parOuImpar(15)); // Ímpar
console.log(parOuImpar(22)); // Par