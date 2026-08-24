// Não usar VAR pelo seguinte motivo:

var eu = 'Gabriel';
var ela = 'Jessica';

console.log(eu)

//Como pode ver, diferente de let e const o var pode ser redeclarado, mas isso não é bom e nem desejavél a um código

//Podemos também, declarar um valor sem especificar se é var, let ou const, mas NÃO é desejavél também e pode gerar problemas no futuro do código, ex:

gato1 = 'Athena';
gat02 = 'Nix'; //passa a ser o valor real da variavel

console.log(gato1); // Nix

//Tipos de dados primitivos

// string, number, undefined, null, boolean, symbol

const nome = 'Gabriel'; //string
const nome1 = "Gabriel"; //string
const nome2 = `Gabriel`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta para local nenhum da memória
const sobreNomeAluno = null; //undefined -> não aponta para local nenhum da memória
const aprovado = false; //boolean = true, false (lógico)

let a = 2;
const b = a; // b recebe valor de a, já b não pode mudar por ser uma constante

console.log(a, b); // 2, 2

a = 3; // apenas a muda seu valor

console.log(a, b); // 3, 2