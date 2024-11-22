### Exercícios de JavaScript (revisão)

#### Exercício 1: Verificação de Idade

**Enunciado:**
Escreva uma função chamada `verificarIdade` que recebe um número como parâmetro representando a idade de uma pessoa e retorna:
- "Menor de idade" se a idade for menor que 18,
- "Maior de idade" se a idade for 18 ou mais.

Chame a função para os seguintes valores e exiba o resultado no console: 15, 18 e 21.

**Implementação:**

```javascript
/**
 * Verifica se uma pessoa é menor ou maior de idade.
 * 
 * @param {number} idade - A idade da pessoa.
 * @returns {string} - "Menor de idade" ou "Maior de idade" baseado na idade.
 */
```

#### Exercício 2: Definição do Dia da Semana

**Enunciado:**
Crie uma função chamada `definirDiaDaSemana` que recebe um número (1 a 7) representando os dias da semana. A função deve retornar o nome do dia correspondente:
- 1 para "Domingo",
- 2 para "Segunda-feira",
- e assim por diante até 7 para "Sábado".

Caso o número seja inválido, retorne "Número inválido". Teste a função com os valores 3, 7 e 8.

**Implementação:**

```javascript
/**
 * Retorna o nome do dia da semana baseado no número fornecido.
 * 
 * @param {number} dia - O número representando o dia da semana (1 a 7).
 * @returns {string} - O nome do dia da semana ou "Número inválido" se o número for inválido.
 */
```

#### Exercício 3: Par ou Ímpar

**Enunciado:**
Implemente uma função chamada `parOuImpar` que recebe um número como parâmetro e utiliza um operador ternário para retornar:
- "Par" se o número for par
- "Ímpar" caso contrário.

Teste a função com os números 10, 15 e 22.

**Implementação:**

```javascript
/**
 * Verifica se um número é par ou ímpar.
 * 
 * @param {number} numero - O número a ser verificado.
 * @returns {string} - "Par" se o número for par, "Ímpar" caso contrário.
 */
```

#### Exercício 4: Verificação de Acesso ao Sistema

**Enunciado:**
Considere que você está verificando se um usuário pode acessar um sistema. Um usuário pode acessar o sistema se:
1. For maior de 18 anos OU for administrador (propriedade isAdmin verdadeira).
2. A conta não estiver bloqueada (isBlocked deve ser falsa).

Implemente a função `podeAcessar` que recebe um objeto com as propriedades: idade, isAdmin, e isBlocked. A função deve retornar true se o acesso for permitido e false caso contrário.

**Implementação:**

```javascript
/**
 * Verifica se um usuário pode acessar o sistema.
 * 
 * @param {Object} usuario - O objeto que representa o usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Se a conta do usuário está bloqueada.
 * @returns {boolean} - Retorna true se o usuário pode acessar o sistema, caso contrário, false.
 */
```

#### Exercício 5: Cálculo de Desconto

**Enunciado:**
Crie uma arrow function chamada `calcularDesconto` que recebe dois argumentos:
- O preço original de um produto (número),
- A porcentagem de desconto (número).

A função deve retornar o preço com o desconto aplicado. Teste a função com os valores:
- Preço original: 100, Desconto: 10 (retorna 90),
- Preço original: 250, Desconto: 20 (retorna 200).

**Implementação:**

```javascript
/**
 * Calcula o preço com desconto aplicado.
 * 
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} - O preço com o desconto aplicado.
 */
```