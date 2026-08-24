let eu = 'Gabriel';
let ela = 'Jessica';
let gato1 = 'Athena';
let gato2 = 'Nix';
let gato3 = 'Théo';

console.log(eu, 'Nasceu em 1999 e', ela, 'nasceu em 2002')

console.log(ela, 'conheceu', eu, 'em 2023 e se apaixonou ardentemente, desejando o', eu, 'todos os santos dias pra ela')

console.log(eu, 'e', ela, 'se casaram em 2025, depois de 1 ano de namoro e de ela implorar tanto')

console.log(eu, 'e', ela, 'tiveram 3 filhos', gato1, ',', gato2, 'e', gato3, '.');

//Regras das variaveis

let sandbox; //aqui, a variavel está reservada, mas sem valor.

sandbox = 12345; //aqui, a variavel está com valor e declarada ao console log

console.log(sandbox);

sandbox = 54321; //as variaveis podem ter seu valor alterados ao decorrer do código

console.log(sandbox);

//Não podemos criar variaves com palavras reservadas pelo sistema, ex: let, const, var e etc
//Variaveis precisam ter nomes significativo pra não confundirmos em código grande
//Não podemos começar variaveis com numeros, espaço e traços, mas sim apenas no final, ex:
let nome1 = 'Gabriel';
//Para uma melhor leitura, ultilize camelCase em variaveis e valores, ex:
let nomeCliente = 'Jessica';
console.log(nomeCliente);
//Não podemos redeclarar variaveis, apenas redeclarar valores
//Não ultilize o var, pois já é antigo e let é moderno