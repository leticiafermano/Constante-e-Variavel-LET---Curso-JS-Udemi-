//LET
let nome = "Luna";
nome = "Ana";

console.log(nome);
console.log('Seu nome é', nome);
console.log(nome, nome);

// //CONST
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado *3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(primeiroNumero + segundoNumero);
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(primeiroNumero + segundoNumero);

console.log( typeof resultado);
console.log(typeof nome);

/* Exercício:
Luiz Otávio Miranda tem 30 anos, pesa 84Kg
tem 1.8 de altura e seu IMC é de 25.925...
Luiz Otávio nasceu em 1992
*/

const primeiroNome = 'Luiz Otávio';
const ultimoNome = 'Miranda';
const peso = 84;
const idade = 30;
const alturaMetros = 1.80;

let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaMetros * alturaMetros);
anoNascimento = 2022 - idade;

console.log(imc);
console.log(anoNascimento);
console.log(primeiroNome, ultimoNome, 'tem', idade, 'anos, pesa', peso, 'Kg');
console.log(`Tem ${alturaMetros} de altura e seu IMC é de ${imc}`); //Forma correta de se fazer a leitura de um valor dentro do JS (${})//
console.log(`${primeiroNome} nasceu em ${anoNascimento}.`);