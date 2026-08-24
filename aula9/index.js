//Não usar VAR pelo seguinte motivo:

var nome = 'Gabriel';
var nome = 'Jessica';

console.log(nome)

//Como pode ver, diferente de let e const o var pode ser redeclarado, mas isso não é bom e nem desejavél a um código

//Podemos também, declarar um valor sem especificar se é var, let ou const, mas NÃO é desejavél também e pode gerar problemas no futuro do código, ex:

nome1 = 'Athena';
nome1 = 'Nix'; //passa a ser o valor real da variavel

console.log(nome1);