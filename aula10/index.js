//Aula 20: Operadores aritiméticos, de atribuição e incrementos

/*
Adição: +
Subtração: -
Multiplicação & Concatenação: *
Divisão: /
Prescendência: ()
Potenciação: **
Resto da divisão: %
Incremento: ++
Decremento: --

Agora veremos todos em ação
*/

//Adição
let num1 = 2;
let num2 = 5;
let num3 = '10';
let num4 = 10;
console.log(num1 + num2); // 7

//Subtração
console.log(num1 - num2); // -3

//Multiplicação & Concatenação
console.log(num1 * num2); // 10
console.log(num1 + num2 + num3); // 710

//Divisão
console.log(num1 / num2); // 0.4

//Potenciação
console.log(num1 ** num2); // 32

//Resto da divisão
console.log(num1 % num2); // 2

//Prescedência
console.log(num1 + num2 * num4); // sem a ordem, será (num1 + (num2 * num4)); = 52
console.log((num1 + num2) * num4); // com a ordem, será 70

//Incremento (pós-Incremento = contador++) & (pré-Incremento = ++contador)
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador); // 5

/**
    Não é recomendavél, praticar da seguinte maneira:

    let contador = 1;
    console.log(contador);

    Assim, vc não sobrecarrega uma linha de código, o que pode gerar bugs
 */

//Decremento (pós-decremento = contador++) & (pré-decremento = ++contador)
let contador2 = 1;
contador2--; // 0
contador2--; // -1
contador2--; // -2
contador2--; // -3
console.log(contador2); // -3

// Pré, é quando vc quer que primeiro o codigo atribua ou dimuna o valor, pós é depois, ex:

//Pos
let contador3 = 1;
contador3++;
console.log(contador3); // 2

//Pré
let contador4 = 1;
++contador4;
console.log(contador4); // 2

//Temos também uma forma de pular ou regredir de números em números e com diferentes operadores matemáticos, ex:

let contador5 = 0;
contador5 *= 2; // 0
contador5 += 2; // 2
contador5 -= 2; // 0
contador5 **= 2; // 0
contador5 /= 2; // 0
contador5 %= 2; // 0
console.log(contador5); // 0

//Temos também as funções parseInt, parseFloat e Numbers
//Not a Number

let num5 = 10;
let num6 = '10';
console.log(num5 + num6) //1010 por conta da concantenação, mas APENAS com este operador de +
console.log(num5 * num6) // 100 aqui o JS descidiu converter a string em numero, pq? sla.

//parseInt, vai pegar numeros em strings e convertelos em inteiros. ex:
let num7 = 10;
let num8 = parseInt('10.10');
console.log(num7 + num8); // 20 (inteiros)

//parseFloat, vai pegar numeros com pontos em strings e converte-los em flutuantes. ex:
let num9 = 10;
let num10 = parseFloat('10.132332');
console.log(num9 + num10); // 20.1 (decimais)

//Number, vai pegar numeros em strings se virar com eles. ex:
let num11 = 10;
let num12 = Number('14.31232');
console.log(num11 + num12); // 24.31232 (global)