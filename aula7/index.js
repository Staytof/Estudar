//Não podemos criar constantes com palavras reservadas pelo sistema, ex: let, const, var e etc
//constantes precisam ter nomes significativo pra não confundirmos em código grande
//Não podemos começar constantes com numeros, espaço e traços, mas sim apenas no final
//Para uma melhor leitura, ultilize camelCase e Case-senitive em constantes e valores
//Não podemos redeclarar constantes, apenas redeclarar valores
//Não podemos mudar o valor de uma constante
//Não ultilize var, ultilize const
//Diferente do let que podemos reservar um valor, com a contante não podemos

const texto = '5'
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultado * 3;
resultadoTriplicado * resultadoTriplicado + 5;

//Para sabermos o tipo do valor, usaremos o typeof, ex:

console.log(typeof resultado);

//Caso um valor for string e outro number, no typeof o JS não irá somar, mas sim concatená-los, pois para que tenha um resultado de soma, os valores devem ser totalmente numbers.

console.log(typeof texto + primeiroNumero);

//Para que tenha o resultado em numero, usemos sempre valores number

console.log(primeiroNumero * segundoNumero);