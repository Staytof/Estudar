//Aula 21:Estamos falando sobre alert, confirm e prompt

/**
 * Alert: Abre uma janela de alerta no navegador
 * Confirm: Abre uma janela de perguta no navegador: Cancelar / Ok
 * Prompt: Pede pra inserir um valor, sendo string apenas string retornada
 */

let num1 = prompt('Insira um número');
let num2 = prompt('Insira outro número');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert('O resultado é ' + resultado);