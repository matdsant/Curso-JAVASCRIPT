// Não podemos criar constantes com palavras reservadas
// As constantes precisam ter nomes significativos
// Não podemos começar o nome de uma constante com um número
// Não podemos modificar o valor de uma constante
// Variáveis precisam ter nome significativos
// Não podemos redeclarar variáveis com "let"
// Não utilize VAR, UTILIZE CONST
// Não podem conter espaços ou traços
// As varáveis são "Case-sensitive"
// Utilizamos camelCase

// const nome; <- Não podemos fazer isso.

// String = Text | Number = Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; // Cuidado, pois o primeiro resultado pode ser perdido após isso
console.log(resultado);

console.log(typeof (primeiroNumero + segundoNumero));
