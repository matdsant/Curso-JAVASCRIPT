// Variáveis
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaMetros = 1.84;
let anoAtual = 2023;
let imc = peso / (alturaMetros * alturaMetros);
let anoNascimento = anoAtual - idade

// Resposta
console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu no ano de ${anoNascimento}.`);
console.log(`O seu peso atual é ${peso} kg e o seu IMC é ${imc}.`);