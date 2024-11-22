/**
 * Verifica se um usuário pode acessar o sistema.
 * 
 * @param {Object} usuario - O objeto que representa o usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Se a conta do usuário está bloqueada.
 * @returns {boolean} - Retorna true se o usuário pode acessar o sistema, caso contrário, false.
 */
function podeAcessar({ idade, isAdmin, isBlocked }) {
    return (idade > 18 || isAdmin) && !isBlocked;
}

// Exemplos de uso:
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true })); // false